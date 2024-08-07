import Link from "next/link"

export default function BlogCard1({ item }) {
    return (
        <>

            <div className="col-lg-4">
                <div className="blog-page-boxs blog-page-boxs1">
                    <div className="blog-boxs-img">
                        <img src={`/assets/img/image/${item.img}`} alt="" />
                    </div>
                    <div className="space24" />
                    <div className="hadding2 blog-page-hadding">
                        <h4 className="font-f-2 font-20 line--height-24 weight-500"> <Link href={`/blog/${item.id}`}>{item.title}</Link></h4>
                        <div className="space16" />
                        <p className="font-f-2 weight-400 line-height-28 font-16">Emprise builds complete BPM solutions for clients around the world. It allows for low cost of ownership and puts the decision making in the hands of the Business with expert consultant.</p>
                    </div>
                    <div className="space24" />
                    <div className="all-read-btn">
                        <Link href={`/blog/${item.id}`} className="font-f-2 line--height-16 font-16 weight-700">Read more <i className="fa-solid fa-arrow-right" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
