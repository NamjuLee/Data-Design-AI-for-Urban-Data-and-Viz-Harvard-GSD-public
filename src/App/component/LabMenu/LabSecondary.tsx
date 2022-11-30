import { Outlet } from 'react-router-dom'
import { LinkInfo } from '../../../PART_10_Web_Visualization_Digital_Mapping_Analysis';
import LinkList from '../LinkList'

/** 
 * Render the secondary menu with the corresponding 'Outlet'
 * NOTE: why figure/figcaption? see https://stackoverflow.com/a/49026185/7090255
 */
export const LabSecondary = ({ title, subLinks }: { title: string, subLinks: LinkInfo[] }) => {
    return <div className='subpage' style={{ position: 'relative', display: 'flex', height: '100%', width: '100%' }}>
        <figure className='menu-left second-menu'>
            <figcaption className='lab-title'>{title}</figcaption>    
            <LinkList links={subLinks} />
        </figure>
        <div className='subpage-outlet-container' style={{ flex: '1 1 auto' }}>
            <Outlet />
        </div>
    </div>
}