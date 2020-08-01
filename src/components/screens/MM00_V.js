import React from "react";
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';

const menus = [
    {
        menuName: "FREE BOARD",
        link: ""
    },
    {
        menuName: "DOCUMENTS BOARD",
        link: ""
    },
    {
        menuName: "GALLARY",
        link: ""
    }
]

class MM00_V extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            menus: [
                {
                    menuName: "FREE BOARD",
                    link: ""
                },
                {
                    menuName: "DOCUMENTS BOARD",
                    link: ""
                },
                {
                    menuName: "GALLARY",
                    link: ""
                },
            ],
        };
    }
    render() {
        return (
            <main className="MM00_V">
                <Slide top>
                    <h1 className="MM00_V__title" >GJ Community</h1>
                </Slide>
                <div className="MM00_V__menuBox">
                    {menus.map((menu, idx) => {
                        return (
                            <Rotate bottom left delay={idx * 500} key={idx}>
                                <div className="MM00_V__menuBox__menu">{menu.menuName}</div>
                            </Rotate>
                        )
                    })}
                </div>
            </main>

        );
    }
}

export default MM00_V;