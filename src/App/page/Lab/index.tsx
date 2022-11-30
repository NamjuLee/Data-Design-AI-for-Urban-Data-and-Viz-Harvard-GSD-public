import { useState } from "react";
import { Outlet } from "react-router-dom";
import LinkList from "../../component/LinkList";
import { LAB_LINKS, LinkInfo } from '../../../PART_9_LAB_Visualization_Analysis/Lab';

import './index.css';

const Lab = () => {
  const [query, setQuery] = useState('') // all in lowercase
  const onChange = (e) => {
    const rawInput: string = e.target.value;
    setQuery(rawInput.toLowerCase())
  }

  const filteredLinks = !query ? LAB_LINKS : LAB_LINKS.filter((link: LinkInfo) => {
    if (link === 'divider') {
      return false
    }

    const {id, keywords} = link;
    if (id.includes(query)) {
      return true
    }
    if (keywords?.some((keyword) => keyword.toLowerCase().includes(query))) {
      return true
    }

    return false 
  });

  return (
    <div className='main-body'>
      <div className='menu-left'>
        <figure className='sub-left-menu'>
          <figcaption className="lab-title">LAB</figcaption>
        </figure>

        <input className="input-left-menu" onChange={onChange} />
        {query && <div style={{ padding: '5px 3px' }}>{`Showing search results (${filteredLinks.length}):`}</div>}
        <nav className="vis-menu">
          <LinkList links={filteredLinks} />
        </nav>
      </div>

      <div className='container-lab'>
        <Outlet />
      </div>

    </div>
  );
};
export default Lab;