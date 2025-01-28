export default function page(){
    return(
        <>
            <div className="flex flex-col w-full h-screen items-center justify-center">
                <h1 className="text-2xl font-bold">Contacts</h1>

                <div className="mt-3 flex flex-col gap-3">
                    <h1>Facebook: <a className="text-blue-600 " href="facebook.com">facebook.com</a></h1>
                    <h1>YouTube: <a className="text-blue-600 " href="twitter.com">twitter.com</a></h1>
                    <h1>Twitter: <a className="text-blue-600 " href="youtube.com">youtube.com</a></h1>
                </div>
            </div>
        </>
    )
}