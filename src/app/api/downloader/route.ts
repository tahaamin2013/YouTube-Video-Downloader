import { NextResponse } from "next/server"
import ytdl from "ytdl-core"
export async function GET (request:any) {
    const {searchParams} = new URL (request.url)
    const url = searchParams.get('url') as string
    const info = await ytdl.getInfo(url)
    const videoFormats = ytdl.filterFormats(info.formats,'audio')
    const format = ytdl.chooseFormat(videoFormats, {quality :'highestaudio'})
    const fileName = `${info.videoDetails.title}.${format.container}`
    const resposeHeaders = {'content-Disposition':`attachment; filename-"${fileName}"`}
    return NextResponse.json({format, resposeHeaders, fileName})
}