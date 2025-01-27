export default function layout({children}: any){
    return(
        <>
            <div className="flex gap-5 m-5">
                <a href="/profile/contact">Contact</a>
                <a href="/profile/aboutme">About Me</a>
            </div>

            {children}
        </>
    )
}