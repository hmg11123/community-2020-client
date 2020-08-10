import React from "react";
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
import { Link } from "react-router-dom";

const menus = [
    {
        menuName: "FREE BOARD",
        link: "/freeboard"
    },
    {
        menuName: "DOCUMENTS BOARD",
        link: "/docsboard"
    },
    {
        menuName: "GALLARY",
        link: "/gallaryboard"
    }
]

class MM00_V extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            menus: [
                {
                    menuName: "FREE BOARD",
                    link: "/freeboard"
                },
                {
                    menuName: "DOCUMENTS BOARD",
                    link: "/docsboard"
                },
                {
                    menuName: "GALLARY",
                    link: "/gallaryboard"
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
                                <Link to={menu.link}>

                                    <div className="MM00_V__menuBox__menu">{menu.menuName}</div>
                                </Link>
                            </Rotate>
                        )
                    })}
                </div>
            </main>

        );
    }
}

export default MM00_V;