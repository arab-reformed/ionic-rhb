import {Remarkable} from "remarkable";


const hindi_nums: string[] = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']

export function arabic2hindi (num: string | number) : string {
    const str = num + ''
    return str.replace(/([0-9])/g, (n: string) : string => { return hindi_nums[parseInt(n, 10)] })
}


export function markdownHtml(text: string) : string {
    const md = new Remarkable()
    let html =  md.render(text)
    // html = html.replaceAll(/<p>(.*?){\s*\.(\w+)\s*}\s*<\/p>/i, (match, inner, cls) => { return `<p class="${cls}">${inner}</p>` })
    html = html.replace(/<p>(.*?){\s*\.?(\S+)\s*}\s*<\/p>/ig, (match: string, inner: string, cls: string) => { return `<p class="${cls}">${inner}</p>` });
    html = html.replace('<p>', '<p class="md">');
    html = html.replace(/>(.*?)</g, (match: string, text: string) => { return `>${arabic2hindi(text)}<` });

    return html
}
