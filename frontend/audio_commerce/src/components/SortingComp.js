import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-icons";
import "../styles/SortingComp.css";

import Dropdown from 'react-bootstrap/Dropdown'; 
import DropdownButton from 'react-bootstrap/DropdownButton';

function SortingComp({ onSortSelected }) {
    return (
        <DropdownButton id="dropdown-basic-button" title="Sort Products By:" className="sorting_dropdown">
            <Dropdown.Item onClick={() => onSortSelected('editor')}>Editors Pick</Dropdown.Item>
            <Dropdown.Item onClick={() => onSortSelected('popularity')}>Popularity</Dropdown.Item>
            <Dropdown.Item onClick={() => onSortSelected('priceHighLow')}>Price: High - Low</Dropdown.Item>
            <Dropdown.Item onClick={() => onSortSelected('priceLowHigh')}>Price: Low - High</Dropdown.Item>
            <Dropdown.Item onClick={() => onSortSelected('alphaAsc')}>A-Z</Dropdown.Item>
            <Dropdown.Item onClick={() => onSortSelected('alphaDesc')}>Z-A</Dropdown.Item>
        </DropdownButton>
    );
}

export default SortingComp;