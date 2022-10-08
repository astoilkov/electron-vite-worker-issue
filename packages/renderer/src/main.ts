import tildify from "tildify";

console.log(tildify("/Users/astoilkov/awesome"));

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<p>hello</p>
`;

document.body.addEventListener("click", () => {
  new Worker(new URL("./worker.ts", import.meta.url), {
    type: "module",
  });
});
