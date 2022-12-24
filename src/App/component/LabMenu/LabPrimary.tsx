import { useEffect } from 'react';

export const LabPrimary = ({id, env}) => {
  const idContainer = 'container-lab';
  useEffect(() => {
    import('../../Lab').then(({ ControllerLabs }) => { 
        ControllerLabs.init(idContainer, id, env)}
      );
   });
  
  return (
    // <div className="container-lab" id={idContainer} />
    <div style={{ width: '100%', height: '100%'}} id={idContainer} /> // Kuan
  );
}