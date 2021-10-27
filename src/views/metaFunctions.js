/* eslint-disable no-unused-vars */
const createMetaTag = (type, value) => {
    const meta = document.createElement("meta");
    if (type === "description") meta.setAttribute("name", type);
    else meta.setAttribute("property", type);

    meta.setAttribute("content", value);
    meta.setAttribute('v-meta-tag', '');

    return meta;
};

export default (book) => {
    const head = document.head;
    document.title = `${book.title} - ${book.genre} | Tomasz Betcher`;
    const description = createMetaTag("description", book.meta_desc);
    const keywords = createMetaTag("keywords", book.keywords);
    const og_title = createMetaTag("og:title", document.title);
    const og_desc = createMetaTag("og:description", book.meta_desc);
    const og_siteName = createMetaTag("og:site_name", `${book.title} - ${book.genre}`);
    const og_type = createMetaTag("og:type", 'website');
    const og_url = createMetaTag("og:url", `https://${location.hostname}${book.link}`)
    const og_image = createMetaTag("og:image", `https://${location.hostname}/img/logo.caf0f5a3.png`)

    head.appendChild(description);
    head.appendChild(keywords);
    head.appendChild(og_title);
    head.appendChild(og_desc);
    head.appendChild(og_siteName);
    head.appendChild(og_type);
    head.appendChild(og_url);
    head.appendChild(og_image);
}