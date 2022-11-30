import { useEffect } from 'react';

const ContentLab = ({id, env}) => {
  const idContainer = 'container-lab';
  useEffect(() => {
    import('../../../../PART_10_LAB_Visualization_Analysis').then(({ ControllerLabs }) => { 
        ControllerLabs.init(idContainer, id, env)}
      );
   });
  
  return (
    <div style={{ width: '100%', height: '100%'}} id={idContainer} />
  );
}
export default ContentLab;