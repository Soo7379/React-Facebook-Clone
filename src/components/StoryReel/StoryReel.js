import React from "react";
import Story from "./Story/Story";

import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png"
        profileSrc="https://images.unsplash.com/photo-1469598614039-ccfeb0a21111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        title="Sonny Sangha"
      />

      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSePQa-8XFuNtQ&usqp=CAU"
        profileSrc="https://pbs.twimg.com/profile_images/806970003941527552/sF8UtACd_400x400.jpg"
        title="Rafeh Qazi"
      />

      <Story
        image="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd97w=1000&q=80"
        profileSrc="https://image.cnbcfm.com/api/v1/image/106569797-1591"
        title="Frankie Smith"
      />

      <Story
        image="https://images.unsplash.com/photo-1547561090-e2c1104d363f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
        profileSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        title="Aaron Bernath"
      />

      <Story
        image="https://images.unsplash.com/photo-1565716744284-76e26a661fa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80"
        profileSrc="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
        title="Anna James"
      />
    </div>
  );
};

export default StoryReel;
