import { Component } from "react";

class TableC extends Component{
    render(){
        return(
            <div>
            <h1>Libraries</h1>
            <table border={1}>
                <tr>
                    <th> Liked Songs  </th>
                    <th> Fav Playlist </th>
                    <th> Fav Podcast </th>
                </tr>
                <tr>
<th>Recently Played</th>
<th>Recommended Radio</th>
<th>Spotify Podcast</th>
                </tr>
            </table>
            </div>     
        )
    }
}
export default TableC;