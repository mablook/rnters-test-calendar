import React, {useContext} from 'react';
import Context from '../../components/context/contextStorage/contextStorage'
import classes from './Navigation.module.css';
import logo from '../../assets/img/logo.png'
import NavigationItens from './NavigationItens/NavigationIntens'


const Navigation = (props) => {

    const {state} = useContext(Context);

    const linksList = Object.keys(state.buttons).map(e => {
        return <NavigationItens 
        key={state.buttons[e].id} 
        special={state.buttons[e].special} 
        linkLink={state.buttons[e].link} 
        linkTitle={state.buttons[e].text}/>
    });


    return(
        <nav className={classes.Nav}>
            <ul style={{ margin: "0px"}}>
                <li keys="logoKey" className={classes.NavBrand}>
                    <img src={logo} alt="Logo simple small"></img>
                </li>
                <li style={{ float: "right" }}>
                    <ul>
                        {linksList}
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;