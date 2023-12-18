
function ListItem({className,children,role,tabindex}){
    return(
        <li className={className}
            role={role}
            tabindex={tabindex}
            >
            {children}
        </li>
    );
}
export default ListItem