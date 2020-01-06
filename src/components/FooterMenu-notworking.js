import React from "react";

const FooterMenu = props => {
  //get objects
  const footerLinks = {
    Home: "/",
    About: "/about",
    Contact: "/contact-us",
  };

  function createLinks(linkObject) {
    let links = [];

    Object.entries(linkObject).forEach(([name, location]) => {
      links.push(`<Link to=${location}><li key=${name}>${name}</li></Link>`);
    });

    let linksCombined = links.join("");

    return { __html: linksCombined };
  }

  //   const voiceOptions = voices
  // // .filter(voice => voice.lang.includes('en'))
  // .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`).join('');
  // voicesDropdown.innerHTML = voiceOptions;

  //   console.log("LINKS --> ", linksCombined);

  //   return "BUTTS";
  return <ul dangerouslySetInnerHTML={createLinks(footerLinks)} />;
  // return <ul>{links}</ul>;
};

export default FooterMenu;
