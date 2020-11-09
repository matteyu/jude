import { ShellCommands } from '../types.ts'

export const catCommands: ShellCommands[] = [
    {
        command: "timeout 30 ffplay media/song.mp3"
    },
    {
        command: './scripts/closefirefox.sh https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg'
    },
    {
        command: './scripts/closefirefox.sh https://api.time.com/wp-content/uploads/2015/02/cats.jpg?quality=85&w=1024&h=512&crop=1'
    },
    {
        command: './scripts/closefirefox.sh http://cdn.sci-news.com/images/2019/12/image_7867-Cats.jpg'
    },
    {
        command: './scripts/closefirefox.sh https://cdn.mos.cms.futurecdn.net/vChK6pTy3vN3KbYZ7UU7k3-1200-80.jpg'
    },
    {
        command: './scripts/closefirefox.sh https://cdn.vox-cdn.com/thumbor/p7CRPtSgqGntkWRtbvtDROQBmlI=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19919676/GettyImages_1127317526.jpg'
    },
    {
        command: './scripts/closefirefox.sh https://i.ytimg.com/vi/llws5VC-FWo/maxresdefault.jpg'
    }
]