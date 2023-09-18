import {Remarkable} from "remarkable";


const hindi_nums = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']

export function arabic2hindi (num: string | number) : string {
    const str = num + ''
    return str.replace(/([0-9])/g, (n: string) : string => { return hindi_nums[n] })
}


export function markdownHtml(text: string) : string {
    const md = new Remarkable()
    let html =  md.render(text)
    // html = html.replaceAll(/<p>(.*?){\s*\.(\w+)\s*}\s*<\/p>/i, (match, inner, cls) => { return `<p class="${cls}">${inner}</p>` })
    html = html.replace(/<p>(.*?){\s*\.?(\S+)\s*}\s*<\/p>/ig, (match, inner, cls) => { return `<p class="${cls}">${inner}</p>` })
    html = html.replace('<p>', '<p class="md">')
    html = arabic2hindi(html)
    return html
}
