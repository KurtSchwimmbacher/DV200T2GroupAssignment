import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-icons";
import "../styles/SortingComp.css";

import Dropdown from 'react-bootstrap/Dropdown'; 
import DropdownButton from 'react-bootstrap/DropdownButton';

function SortingComp(){

    return(
        <>
       
        <DropdownButton id="dropdown-basic-button" className="sorting_dropdown" title="Sort Products By:">
            <Dropdown.Item href="#/action-1" className="sortCat">Editors Pick</Dropdown.Item>
            <Dropdown.Item href="#/action-2" className="sortCat">Popularity</Dropdown.Item>
            <Dropdown.Item href="#/action-3" className="sortCat">Price: High - Low</Dropdown.Item>
            <Dropdown.Item href="#/action-2" className="sortCat">Price: Low - High</Dropdown.Item>
            <Dropdown.Item href="#/action-3" className="sortCat">A-Z</Dropdown.Item>
            <Dropdown.Item href="#/action-3" className="sortCat">Z-A</Dropdown.Item>
        </DropdownButton>
                
        </>
    );
}

export default SortingComp; 