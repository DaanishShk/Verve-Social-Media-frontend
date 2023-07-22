import React from 'react'
import SettingsInput from './SettingsInput';
import useLink from '../../Hooks/Links/useLink';

function CardSettingsLinkInput({site, Icon, links, setLinks}) {

    const [youtube, setYoutube] = useLink(site, links[site] || "", links, setLinks);

    return (
      <div className="cardSettings__linkContainer">
        <SettingsInput
          name={site[0].toUpperCase() + site.substr(1).toLowerCase()}
          type="url"
          value={youtube}
          setValue={setYoutube}
        />
        <Icon />
      </div>
    );
}

export default CardSettingsLinkInput
