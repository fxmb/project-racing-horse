type Richtext = {
  type: string;
  data: {
    meta: { title: string };
    text: string;
    level: string;
    html: string;
    style: string;
    items: [];
    file: { url: string; width: string; height: string };
    content: [[col: string]];
    caption: string;
    link: string;
  };
};

const textLookup: { [key: string]: string } = {
  "1": "text-4xl",
  "2": "text-3xl",
  "3": "text-2xl",
  "4": "text-xl",
  "5": "text-lg",
};

function formatRawLink(rawLink: string): string | boolean {
  if (rawLink.includes("youtube")) {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = rawLink.match(regExp);
    return match && match[7].length == 11
      ? `https://www.youtube.com/embed/${match[7]}`
      : false;
  }
  return rawLink;
}

export const rawBlogToHTML = (jsonStr: string) => {
  if (jsonStr === undefined) return;
  let obj = JSON.parse(jsonStr);

  let html = "";
  obj["blocks"].forEach(function (block: Richtext, index: number) {
    switch (block["type"]) {
      case "paragraph":
        // Add WhiteSpace in Blog. Ugly but know a better way?
        if (block.data.text === "+++") {
          html += `<div class="h-6 text-gray-500"></div>`;
          break;
        }
        if (block.data.text.includes("puppypals.de")) {
          html +=
            `<p class="my-6 font-bold text-xl text-gray-500">${block.data.text}</p>`.replace(
              /<a href/g,
              '<a class="text-primary underline underline-offset-2 underline-primary" href' // Make Links blue underlined
            );
        }

        if (!block.data.text.includes("puppypals.de")) {
          if (block.data.text.includes("<b>")) {
            html +=
              `<p class="mb-3 text-gray-700 text-lg">${block.data.text}</p>`.replace(
                /<a href/g,
                '<a ref="noopen nofollow" class="text-primary underline underline-offset-2 underline-primary" href' // Make Links blue underlined
              );
          } else {
            html +=
              `<p class="leading-relaxed mb-3 text-gray-500">${block.data.text}</p>`.replace(
                /<a href/g,
                '<a ref="noopen nofollow" class="text-primary underline underline-offset-2 underline-primary" href' // Make Links blue underlined
              );
          }
        }
        break;

      case "header":
        html += `<h${block.data.level} 
                class='text-2xl mb-6 font-bold leading-[1.3] tracking-tight text-gray-900 sm:text-3xl ${
                  textLookup[`${block.data.level}`]
                }'>${block.data.text}</h${block.data.level}>`;
        break;

      case "raw":
        if (block.data.html.includes("youtube")) {
          html += block.data.html.replace(/<iframe/g, '<iframe width="100%"');
          break;
        }
        html += block["data"]["html"];
        break;

      case "delimiter":
        html += `<hr class="flex my-4"/>`;
        break;

      case "list":
        let lsType = block.data.style == "ordered" ? "ol" : "ul";
        html += `<${lsType} class="ml-4 md:ml-8 list-outside">`;
        block.data.items.forEach(function (item: string, index: number) {
          if (lsType === "ol") {
            html +=
              `<li class="list-outside font-normal text-gray-900 text-xl">${item}</li>`.replace(
                /<a href/g,
                '<a ref="noopen nofollow" class="text-primary underline underline-offset-2 underline-primary" href' // Make Links blue underlined
              );
          }

          if (lsType === "ul") {
            html +=
              `<li class="list-disc list-outside leading-relaxed mb-3 text-gray-500">${item}</li>`.replace(
                /<a href/g,
                '<a ref="noopen nofollow" class="text-primary underline underline-offset-2 underline-primary" href' // Make Links blue underlined
              );
          }
        });
        html += `</${lsType}>`;
        break;

      case "image":
        html += `
        <div class="mt-6 flex flex-col">
          <div class="">
            <img
            class="flex align-center overflow-scroll items-center justify-center mt-4 text-center"
            src=${block.data.file.url}
            alt=${block.data.caption}
            width=${block.data.file.width}
            height=${block.data.file.height}
            loading="lazy"
            />
          </div>
          <p class="text-gray-400 mb-4 ">${
            block.data?.caption ? block.data.caption : ""
          }</p>
        </div>`;
        break;
      case "LinkTool":
        html += `
                <div class="mt-6">
                    <div class="aspect-w-16 aspect-h-9">
                        <iframe
                            src=${formatRawLink(block.data.link)}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title=${block.data.meta.title}
                            loading=lazy
                        ></iframe>
                    </div>
                </div>
            `;
        break;

      case "table":
        let header = block?.data?.content[0];
        let rows = block?.data?.content?.slice(1, block.data.content.length);

        html += `<div class="overflow-x-auto">
                <table class="table-auto overflow-auto">
                <thead class="bg-puppypals-blue">
                  <tr>
                  ${header
                    .map((col: string) => {
                      return `<th class="md:text-md text-sm text-center font-lg text-white px-6 py-4">${col}</th>`;
                    })
                    .join("")}
                  </tr>
                </thead>
                <tbody>
                ${rows
                  .map((row: string[], idx: number) => {
                    return `<tr class= ${idx % 2 == 0 ? "bg-gray-300" : null}  >
                ${row
                  .map((cell: string, idx: number) => {
                    return `<td class="
                        ${cell === "+++" ? "bg-gray-100" : ""}
                        ${
                          idx == 0 ? "text-left bg-white" : "text-center"
                        }  hover:border-collapse border-b-0 border-gray-600 text-sm text-gray-900  px-6 py-2 whitespace-nowrap">${
                      cell === "+++" ? " " : cell
                    }</td>`;
                  })
                  .join("")}
                </tr>`;
                  })
                  .join("")}
                </tbody>
              </table>
              </div>`;
        break;
      default:
        break;
    }
  });

  return html;
};
