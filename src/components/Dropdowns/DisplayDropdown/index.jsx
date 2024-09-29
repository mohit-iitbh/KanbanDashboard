import React, { useCallback, useEffect, useRef, useState } from 'react';
import './displayDropdown.css';
import { BiChevronDown } from "react-icons/bi";
import { DisplayIcon } from '../../../utils/helper';

function DisplayDropdown({ grouping, setGrouping, ordering, setOrdering }) {
  const [visible, setVisible] = useState(false);
  const componentRef = useRef(null);

  const openDropdown = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  const handleClickOutside = useCallback((event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setVisible(false);
    }
  }, []);

  const onGroupingChange = useCallback((e) => setGrouping(e.target.value), [setGrouping]);
  const onOrderingChange = useCallback((e) => setOrdering(e.target.value), [setOrdering]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className='display-dropdown' ref={componentRef}>
      <div className='dropdown-label-container' onClick={openDropdown}>
        <DisplayIcon size={14} />
        <div className='dropdown-label'>Display</div>
        <BiChevronDown color='#6b6f76' />
      </div>
      <div className={`dropdown-content-container ${visible && "visible"}`}>
        <div className='dropdown-content-row'>
          <div className='dropdown-content-label'>Grouping</div>
          <select name="grouping" id="grouping" value={grouping} onChange={onGroupingChange}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className='dropdown-content-row'>
          <div className='dropdown-content-label'>Ordering</div>
          <select name="ordering" id="ordering" value={ordering} onChange={onOrderingChange}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default DisplayDropdown;
