declare const hljs: { initHighlightingOnLoad: Function };

hljs.initHighlightingOnLoad();

{
    //Server-rendered react views cannot wire up event listeners. 
    //This script will open a share window when clicking the share links on a blog post.
    const handleShare = (href: string, event: MouseEvent) => {
        event.preventDefault();

        window.open(href, "share", 'width=550,height=250');
    };

    const anchors = document.querySelectorAll(".share > a");

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener("click", handleShare.bind(anchor, anchor["href"]));
    }
}