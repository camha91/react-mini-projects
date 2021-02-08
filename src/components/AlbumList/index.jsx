import React, { useState } from 'react';
import AlbumFeature from './components/AlbumFeature';

function AlbumListApp(props) {
    const [albumList, setAlbumList] = useState(
        [
            {
                id: 1,
                name: "START-UP OST Piano Album | 스타트업 OST 전곡 피아노 모음 | Kpop Piano Cover",
                thumbnailUrl: "https://i.ytimg.com/vi/nt39Aj23g_k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJaVCbygF18Nr3qaZe2PZZMFtLtg"
            }, {
                id: 2,
                name: "8 Hours Mozart | Exciting Creative Whimsical Brain Power Music",
                thumbnailUrl: "https://i.ytimg.com/vi/lNc7dP3DCcY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3kj58YX3HbxvDKG9Q5TeZarWx7A",
            }, {
                id: 3,
                name: "2020 최고의 Kpop 노래 톱 30: BLACKPINK, PENTAGON, iKON, BTS, EXID, MOMOLAND, SEVENTEEN, Red Velvet, TWICE",
                thumbnailUrl: "https://i.ytimg.com/vi/sjyXD6Ii5u8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCurojU8JaHor69SzfUvM4Ksi8Epw",
            }, {
                id: 4,
                name: "공부할때 듣기 좋은 피아노 커버 모음 Piano Cover For Studying",
                thumbnailUrl: "https://i.ytimg.com/vi/BtxDwlbG6YI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkC8aDFqdHKp56LDVwDlyzpfT3Xw",
            }, {
                id: 5,
                name: "Beautiful Music, Relaxing Piano Music with Rain Sounds, Stress Relief, Relax, Sleep, Writing Music",
                thumbnailUrl: "https://i.ytimg.com/vi/39bTBrr0ONE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCgDSPv4igoFSO9MgFace6cTfnDw",
            }
        ]
    );

    return (
        <div>
            <h1>Album Song List</h1>

            <AlbumFeature albumList={albumList} />
        </div>
    );
}

export default AlbumListApp;
