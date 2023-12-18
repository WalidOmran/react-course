import ListItem from "../common/ListItem";
function OptionList({optionList}) {
    const optionItems = optionList;
    return(
        <ul className="main-header_top-nav-option-list">
            {
                optionItems.map((text)=> 
                <ListItem   
                        className="main-header_top-nav-option-item"
                        role="button"
                        tabindex="0"
                        onClick={()=>{console.log('test')}}
                    >
                    {text}
                </ListItem>
                )
            }
            
        </ul>
    );
}
export default OptionList