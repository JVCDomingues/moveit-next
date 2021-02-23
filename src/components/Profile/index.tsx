import React from 'react';

import styles from '../../styles/components/Profile.module.css';

function Profile() {
  return (
    <div className={styles.profileContainer}> 
      <img src="https://github.com/jvcdomingues.png" alt="João Victor"/>
      <div>
        <strong>João Victor</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  )
}

export default Profile;
