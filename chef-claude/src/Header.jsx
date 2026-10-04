import chefClaudeLogo from "./assets/chef-claude-icon.png"

export default function Header(){
    return(
        <header className="header">
            <img src={chefClaudeLogo} alt="chef claude icon"/>
            <span>Chef Claude</span>
            
        </header>
    )
}