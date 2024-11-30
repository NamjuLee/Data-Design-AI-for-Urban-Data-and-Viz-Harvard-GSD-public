import { Outlet } from 'react-router-dom'
import { LinkInfo } from '../../Lab';
import LinkList from '../LinkList'

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