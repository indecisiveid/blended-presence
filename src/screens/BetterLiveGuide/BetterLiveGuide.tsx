import React, {useEffect, useState} from "react";
import { BadgeTvDefault } from "../../components/BadgeTvDefault";
import { BadgeTvDefaultWrapper } from "../../components/BadgeTvDefaultWrapper";
import { BrandGradient } from "../../components/BrandGradient";
import { ButtonRail } from "../../components/ButtonRail";
import { ContentblockTv } from "../../components/ContentblockTv";
import { Dimmer } from "../../components/Dimmer";
import { ElementsDimmer } from "../../components/ElementsDimmer";
import { ElementsFade } from "../../components/ElementsFade";
import { HeroImage } from "../../components/HeroImage";
import { HeroMetadata } from "../../components/HeroMetadata";
import { HighlightStandard } from "../../components/HighlightStandard";
import { LozengeTvCategory } from "../../components/LozengeTvCategory";
import { MasterBillboard } from "../../components/MasterBillboard";
import { MetaSynopsis } from "../../components/MetaSynopsis";
import { MetaTiles } from "../../components/MetaTiles";
import { ModeRestingSizeWrapper } from "../../components/ModeRestingSizeWrapper";
import { NowNextRail } from "../../components/NowNextRail";
import { ProviderLogo } from "../../components/ProviderLogo";
import { SizeTileLogoWrapper } from "../../components/SizeTileLogoWrapper";
import { StandardHeader } from "../../components/StandardHeader";
import { TileBillboard } from "../../components/TileBillboard";
import { TileStandard } from "../../components/TileStandard";
import { TilesTv } from "../../components/TilesTv";
import { TitleArt } from "../../components/TitleArt";
import { TvMetaDataTiles } from "../../components/TvMetaDataTiles";
import { VariantUnfocusedWrapper } from "../../components/VariantUnfocusedWrapper";
import { CustomTileWrapper } from "../../components/CustomTileWrapper";
import { MyList } from "../../icons/MyList";
import { MyList3 } from "../../icons/MyList3";
import ImageComponent from './ImageComponent';
import ImageComponent2 from './ImageComponent2';
import ImageComponent3 from './ImageComponent3';
import "./style.css";
import family_program_browse_response_shrunken from '../../profileContent/family_program_browse_response_shrunken.json';
import gru_program_browse_response_shrunken from '../../profileContent/gru_program_browse_response_shrunken.json';
import theresa_and_gru_program_browse_response_shrunken from '../../profileContent/theresa_and_gru_program_browse_response_shrunken.json';
import theresa_program_browse_response_shrunken from '../../profileContent/theresa_program_browse_response_shrunken.json'

export const BetterLiveGuide = (): JSX.Element => {

  interface Profile {
    displayName: string;
    entityId: string;
    avatarId: string;
    displayAvatar?: boolean;
  }
  
  // Define the state and initial value
  const [currentProfiles, setCurrentProfiles] = useState<Record<string, Profile>>({
    // The kid's profile
    profile1 : {
      entityId: "aa9e8e55-7f30-43c2-9716-0a20e4094a32",
      displayName: "",
      avatarId: "",
      displayAvatar: false
    },
    // Kevin's Profile
    profile2 : {
      entityId: "2e5f6e3d-0897-4850-bdd9-68f7ac5fbabd",
      displayName: "",
      avatarId: "",
      displayAvatar: false
    },
    // Hai's Profile
    profile3 : {
      entityId: "b15cfc5d-a0a8-443a-9c5e-44637b0b3464",
      displayName: "",
      avatarId: "",
      displayAvatar: false
    }
  });
  const profilesToShow = Object.values(currentProfiles).filter(profile => profile.displayAvatar);
  
  // Build the title string based on displayNames
  let title = "";
  if (profilesToShow.length === 1) {
    title = `${profilesToShow[0].displayName}`;
  } else if (profilesToShow.length > 1) {
    const lastProfile = profilesToShow.pop();
    if (lastProfile) {  // Check to make sure lastProfile is not undefined
      const names = profilesToShow.map(profile => profile.displayName).join(", ");
      title = `${names} and ${lastProfile.displayName}`;
    }
  } else {
    title = "No content";  // or any default text you want to show
  }

  const isJSON = (str: string) => {
    try {
      JSON.parse(str);
      return true;
    } catch {
      return false;
    }
  };
  
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:2500');
  
    ws.onmessage = (event) => {
      if (isJSON(event.data)) {
        const data = JSON.parse(event.data);
        const { interface_type, presence_status, ...numberedProfiles } = data;
  
        // Filter only the profile objects and make sure they are not null and have 'entityId'
        const updatedProfiles = Object.fromEntries(
          Object.entries(numberedProfiles).filter(
            ([key, value]) => value !== null && typeof value === 'object' && value.hasOwnProperty('entityId')
          )
        );
  
        // Copy the current state
        const newProfiles: Record<string, Profile> = { ...currentProfiles };
  
        // Create a set of entityIds received in the update for quick lookup
        const updatedEntityIds = new Set(Object.values(updatedProfiles).map((profile: any) => profile.entityId));
  
        // Loop over the keys of newProfiles
        Object.keys(newProfiles).forEach((key) => {
          const profile = newProfiles[key];
          
          if (typeof profile === 'object' && profile.hasOwnProperty('entityId')) {
            const matchingProfile = Object.values(updatedProfiles).find(
              (updatedProfile: any) => updatedProfile.entityId === profile.entityId
            ) as Profile | undefined;
    
            if (matchingProfile) {
              if (typeof matchingProfile === 'object' && matchingProfile.hasOwnProperty('displayName')) {
                profile.displayName = matchingProfile.displayName;
                // Set displayAvatar based on presence_status from WebSocket data
                profile.displayAvatar = presence_status;
              }
            } else if (!updatedEntityIds.has(profile.entityId)) {
              profile.displayAvatar = false;
            }
          }
        });
  
        // Update the state
        setCurrentProfiles(newProfiles);
      }
    };
  
    return () => {
      ws.close();
    };
  }, [currentProfiles]);  
  

  return (
    <div className="better-live-guide">
      <div className="div-3">
        <div className="overlap-5">
          <div className="overlap-6">
            <ContentblockTv
              callout="Watch on"
              calloutClassName="contentblock-TV-3"
              className="contentblock-TV-instance"
              description="When a familiar threat resurfaces, Jake and Neytiri must protect their children and their planet."
              descriptionClassName="contentblock-TV-5"
              feature="default"
              hasDivider={false}
              override={<HeroMetadata className="hero-metadata-instance" runtimeOrSeasonsClassName="hero-metadata-2" />}
              providerLogo="https://c.animaapp.com/pLg7BaBQ/img/providerlogo@2x.png"
              providerRowClassName="contentblock-TV-2"
              titleOptionsTvDivClassName="contentblock-TV-4"
              titleOptionsTvProgramTitle="Avatar: The Way of the Water"
            />
            <div className="element-rail-large">
              <div className="tiles-3">
                <div className="element-19" data-responsive-tokens-mode="TV">
                  <div className="overlap-group-11">
                    <img className="image-7" alt="Image" src="https://c.animaapp.com/pLg7BaBQ/img/image--11@3x.png" />
                    <div className="div-4">
                      <ElementsFade className="SKY-fade-7" />
                    </div>
                    <TvMetaDataTiles
                      className="TV-meta-data-tiles-13"
                      description2="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-16@2x.png"
                      descriptionClassName="TV-meta-data-tiles-17"
                      fade="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-16@2x.png"
                      fadeClassName="TV-meta-data-tiles-15"
                      img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-16@2x.png"
                      logoPosition="top"
                      progressBar={false}
                      providerLogoClassName="TV-meta-data-tiles-14"
                      size="tile"
                      title2="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-16@2x.png"
                      titleClassName="TV-meta-data-tiles-16"
                    />
                    <div className="dimmer-4" />
                  </div>
                </div>
                <div className="element-20" data-responsive-tokens-mode="TV">
                  <div className="overlap-7">
                    <div className="fade-7">
                      <div className="SKY-fade-8" />
                    </div>
                    <TvMetaDataTiles
                      className="TV-meta-data-tiles-21"
                      containerClassName="TV-meta-data-tiles-18"
                      description2="https://c.animaapp.com/pLg7BaBQ/img/description-20.svg"
                      descriptionClassName="TV-meta-data-tiles-23"
                      fade="https://c.animaapp.com/pLg7BaBQ/img/hero-masked.png"
                      fadeClassName="TV-meta-data-tiles-22"
                      img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-15@2x.png"
                      logoPosition="top"
                      progressBarBrandBarMoveUseClassName="TV-meta-data-tiles-20"
                      progressBarBrandHeightSmallClassName="TV-meta-data-tiles-19"
                      progressBarBrandProgressClassName="TV-meta-data-tiles-20"
                      size="tile"
                      title2="https://c.animaapp.com/pLg7BaBQ/img/title-20.svg"
                      titleClassName="TV-meta-data-tiles-23"
                    />
                    <HighlightStandard
                      className="highlight-standard-25"
                      glintGlintClassName="highlight-standard-27"
                      overlapGroupClassName="highlight-standard-26"
                      strokeI="https://c.animaapp.com/pLg7BaBQ/img/stroke-i-21@2x.png"
                      strokeIClassName="highlight-standard-29"
                      strokeIi="https://c.animaapp.com/pLg7BaBQ/img/stroke-ii.png"
                      strokeIiClassName="highlight-standard-28"
                      tone="neutral"
                    />
                  </div>
                </div>
                <div className="element-21" data-responsive-tokens-mode="TV">
                  <div className="overlap-group-11">
                    <div className="div-4">
                      <ElementsFade className="SKY-fade-9" />
                    </div>
                    <TvMetaDataTiles
                      className="TV-meta-data-tiles-13"
                      description2="https://c.animaapp.com/pLg7BaBQ/img/description-19.svg"
                      descriptionClassName="TV-meta-data-tiles-23"
                      fade="https://c.animaapp.com/pLg7BaBQ/img/fade-19@2x.png"
                      fadeClassName="TV-meta-data-tiles-24"
                      img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-14@2x.png"
                      logoPosition="top"
                      progressBar={false}
                      size="tile"
                      title2="https://c.animaapp.com/pLg7BaBQ/img/title-19.svg"
                      titleClassName="TV-meta-data-tiles-23"
                    />
                    <div className="dimmer-4" />
                  </div>
                </div>
                <div className="element-22" data-responsive-tokens-mode="TV">
                  <div className="overlap-group-11">
                    <div className="div-4">
                      <ElementsFade className="SKY-fade-10" />
                    </div>
                    <TvMetaDataTiles
                      className="TV-meta-data-tiles-13"
                      description2="https://c.animaapp.com/pLg7BaBQ/img/description-18.svg"
                      descriptionClassName="TV-meta-data-tiles-23"
                      fade="https://c.animaapp.com/pLg7BaBQ/img/fade-18@2x.png"
                      fadeClassName="TV-meta-data-tiles-25"
                      img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-13@2x.png"
                      logoPosition="top"
                      progressBar={false}
                      size="tile"
                      title2="https://c.animaapp.com/pLg7BaBQ/img/title-18.svg"
                      titleClassName="TV-meta-data-tiles-23"
                    />
                    <div className="dimmer-4" />
                  </div>
                </div>
                <div className="element-23" data-responsive-tokens-mode="TV">
                  <div className="overlap-group-11">
                    <img className="image-8" alt="Image" src="https://c.animaapp.com/pLg7BaBQ/img/image--7.png" />
                    <div className="div-4">
                      <ElementsFade className="SKY-fade-11" />
                    </div>
                    <TvMetaDataTiles
                      className="TV-meta-data-tiles-13"
                      description2="https://c.animaapp.com/pLg7BaBQ/img/description-17.svg"
                      descriptionClassName="TV-meta-data-tiles-23"
                      fade="https://c.animaapp.com/pLg7BaBQ/img/image--170@2x.png"
                      fadeClassName="TV-meta-data-tiles-27"
                      img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-12@2x.png"
                      logoPosition="top"
                      progressBar={false}
                      providerLogoClassName="TV-meta-data-tiles-26"
                      size="tile"
                      title2="https://c.animaapp.com/pLg7BaBQ/img/title-17.svg"
                      titleClassName="TV-meta-data-tiles-23"
                    />
                    <BadgeTvDefault className="badge-TV-default-5" label="Badge" />
                    <div className="dimmer-4" />
                  </div>
                </div>
                <div className="element-24" data-responsive-tokens-mode="TV">
                  <img className="image-9" alt="Image" src="https://c.animaapp.com/pLg7BaBQ/img/hero-masked.png" />
                  <div className="div-4">
                    <div className="div-4">
                      <ElementsFade className="SKY-fade-7" />
                    </div>
                    <TvMetaDataTiles
                      className="TV-meta-data-tiles-13"
                      description2="https://c.animaapp.com/pLg7BaBQ/img/image--170@2x.png"
                      descriptionClassName="TV-meta-data-tiles-31"
                      fade="https://c.animaapp.com/pLg7BaBQ/img/image--170@2x.png"
                      fadeClassName="TV-meta-data-tiles-29"
                      img="https://c.animaapp.com/pLg7BaBQ/img/image--170@2x.png"
                      logoPosition="top"
                      progressBar={false}
                      providerLogoClassName="TV-meta-data-tiles-28"
                      size="tile"
                      title2="https://c.animaapp.com/pLg7BaBQ/img/image--170@2x.png"
                      titleClassName="TV-meta-data-tiles-30"
                    />
                    <BadgeTvDefault className="badge-TV-default-5" label="Badge" />
                    <div className="dimmer-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-8">
            <StandardHeader
              className="standard-header-instance"
              elementsElementsSizeSmallVariantClassName="standard-header-2"
              mode="new"
            />
            <div>
            </div>
            <div className="time-battery">
              <div className="time">12.56pm</div>
            </div>
              <div className="profile">
                <div className="first-profile">
                  {currentProfiles['profile1'] && currentProfiles['profile1'].displayAvatar ? (
                      <ImageComponent />
                  ) : null}
                </div>
                <div className="second-profile">
                    {currentProfiles['profile2'] && currentProfiles['profile2'].displayAvatar ? (
                        <ImageComponent2 />
                    ) : null}
                  </div>
                <div className="third-profile">
                    {currentProfiles['profile3'] && currentProfiles['profile3'].displayAvatar ? (
                        <ImageComponent3 />
                    ) : null}
                </div>
                </div>
              </div>
          <div className="rail">
            <div className="element-standard">
              <div className="tiles-4">
                <img
                  className="tile-lead-square"
                  alt="Tile lead square"
                  src="https://c.animaapp.com/pLg7BaBQ/img/tile---lead---square.png"
                />
                <TileStandard
                  className="tile-1-1-standard"
                  focus="unfocused"
                  masterFocusElementsDimmerElementsDimmerClassName="element-25"
                  masterFocusFocusUnfocusedClassName="tile-standard-instance"
                  masterFocusOverlapGroupClassName="tile-1-1-standard-instance"
                />
                <TileStandard
                  className="tile-1-1-standard"
                  focus="unfocused"
                  masterFocusElementsDimmerElementsDimmerClassName="element-27"
                  masterFocusFocusUnfocusedClassName="tile-standard-instance"
                  masterFocusOverlapGroupClassName="element-26"
                />
                <TileStandard
                  className="tile-1-1-standard"
                  focus="unfocused"
                  masterFocusElementsDimmerElementsDimmerClassName="element-27"
                  masterFocusFocusUnfocusedClassName="tile-standard-instance"
                  masterFocusOverlapGroupClassName="element-28"
                />
                <TileStandard
                  className="tile-1-1-standard"
                  focus="unfocused"
                  masterFocusElementsDimmerElementsDimmerClassName="element-27"
                  masterFocusFocusUnfocusedClassName="tile-standard-instance"
                  masterFocusOverlapGroupClassName="element-29"
                />
                <TileStandard
                  className="tile-1-1-standard"
                  focus="unfocused"
                  masterFocusElementsDimmerElementsDimmerClassName="element-27"
                  masterFocusFocusUnfocusedClassName="tile-standard-instance"
                  masterFocusOverlapGroupClassName="element-30"
                />
                <TileStandard
                  className="tile-1-1-standard"
                  focus="unfocused"
                  masterFocusElementsDimmerElementsDimmerClassName="element-27"
                  masterFocusFocusUnfocusedClassName="tile-standard-instance"
                  masterFocusOverlapGroupClassName="element-31"
                />
                <TileStandard
                  className="tile-1-1-standard"
                  focus="unfocused"
                  masterFocusElementsDimmerElementsDimmerClassName="element-25"
                  masterFocusFocusUnfocusedClassName="tile-standard-instance"
                  masterFocusOverlapGroupClassName="element-32"
                />
                <TileStandard
                  className="tile-1-1-standard"
                  focus="unfocused"
                  masterFocusElementsDimmerElementsDimmerClassName="element-27"
                  masterFocusFocusUnfocusedClassName="tile-standard-instance"
                  masterFocusOverlapGroupClassName="element-33"
                />
                <TileStandard
                  className="tile-1-1-standard"
                  focus="unfocused"
                  masterFocusElementsDimmerElementsDimmerClassName="element-27"
                  masterFocusFocusUnfocusedClassName="tile-standard-instance"
                  masterFocusOverlapGroupClassName="element-34"
                />
                <TileStandard
                  className="tile-1-1-standard"
                  focus="unfocused"
                  masterFocusElementsDimmerElementsDimmerClassName="element-27"
                  masterFocusFocusUnfocusedClassName="tile-standard-instance"
                  masterFocusOverlapGroupClassName="element-35"
                />
                <TileStandard
                  className="tile-1-1-standard"
                  focus="unfocused"
                  masterFocusElementsDimmerElementsDimmerClassName="element-27"
                  masterFocusFocusUnfocusedClassName="tile-standard-instance"
                  masterFocusOverlapGroupClassName="element-36"
                />
                <TileStandard
                  className="tile-1-1-standard"
                  focus="unfocused"
                  masterFocusElementsDimmerElementsDimmerClassName="element-27"
                  masterFocusFocusUnfocusedClassName="tile-standard-instance"
                  masterFocusOverlapGroupClassName="element-37"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lozenge-rails" id="actions-rail">
          <LozengeTvCategory
            category="My List"
            focus={false}
            labelClassName="lozenge-TV-category-2"
            overlapGroupClassName="lozenge-TV-category-instance"
          />
          <LozengeTvCategory
            category="Search"
            focus={false}
            labelClassName="lozenge-TV-category-2"
            overlapGroupClassName="lozenge-TV-category-3"
          />
          <LozengeTvCategory
            category="TV Shows"
            focus={false}
            labelClassName="lozenge-TV-category-2"
            overlapGroupClassName="lozenge-TV-category-4"
          />
          <LozengeTvCategory
            category="Movies"
            focus={false}
            labelClassName="lozenge-TV-category-2"
            overlapGroupClassName="lozenge-TV-category-5"
          />
          <div className="lozenge-TV-category-6">
            <div className="overlap-15">
              <BrandGradient
                className="brand-gradient-instance"
                img="https://c.animaapp.com/pLg7BaBQ/img/-brand-gradient---2.svg"
                position="five"
              />
              <div className="label-3">Sports</div>
            </div>
          </div>
          <div className="lozenge-TV-category-6">
            <BrandGradient
              className="brand-gradient-2"
              position="six"
              position1="https://c.animaapp.com/pLg7BaBQ/img/fade-1@2x.png"
            />
            <div className="label-4">Category</div>
          </div>
        </div>
        <div id="guide-rail">
        <NowNextRail
          className="now-next-rail-instance"
          focus={false}
          scrolled={false}
          tileLeadDivClassName="now-next-rail-3"
          tileLeadRailTitleClassName="now-next-rail-4"
          tileLeadTitle="Guide"
          tilesClassName="now-next-rail-2"
          tilesNowNextTileTvMetaDataNowDescription="https://c.animaapp.com/pLg7BaBQ/img/description-14.svg"
          tilesNowNextTileTvMetaDataNowDescription1="https://c.animaapp.com/pLg7BaBQ/img/description-15.svg"
          tilesNowNextTileTvMetaDataNowDescription2="https://c.animaapp.com/pLg7BaBQ/img/description-12.svg"
          tilesNowNextTileTvMetaDataNowDescription3="https://c.animaapp.com/pLg7BaBQ/img/description-13.svg"
          tilesNowNextTileTvMetaDataNowDescription4="https://c.animaapp.com/pLg7BaBQ/img/description-10.svg"
          tilesNowNextTileTvMetaDataNowDescription5="https://c.animaapp.com/pLg7BaBQ/img/description-11.svg"
          tilesNowNextTileTvMetaDataNowDescription6="https://c.animaapp.com/pLg7BaBQ/img/description-8.svg"
          tilesNowNextTileTvMetaDataNowDescription7="https://c.animaapp.com/pLg7BaBQ/img/description-9.svg"
          tilesNowNextTileTvMetaDataNowDescription8="https://c.animaapp.com/pLg7BaBQ/img/fade-9@2x.png"
          tilesNowNextTileTvMetaDataNowDescription9="https://c.animaapp.com/pLg7BaBQ/img/fade-9@2x.png"
          tilesNowNextTileTvMetaDataNowDescriptionClassName="now-next-rail-13"
          tilesNowNextTileTvMetaDataNowDescriptionClassNameOverride="now-next-rail-15"
          tilesNowNextTileTvMetaDataNowFade="https://c.animaapp.com/pLg7BaBQ/img/image--170@2x.png"
          tilesNowNextTileTvMetaDataNowFade1="https://c.animaapp.com/pLg7BaBQ/img/image--170@2x.png"
          tilesNowNextTileTvMetaDataNowFade2="https://c.animaapp.com/pLg7BaBQ/img/image--170@2x.png"
          tilesNowNextTileTvMetaDataNowFade3="https://c.animaapp.com/pLg7BaBQ/img/image--170@2x.png"
          tilesNowNextTileTvMetaDataNowFade4="https://c.animaapp.com/pLg7BaBQ/img/image--170@2x.png"
          tilesNowNextTileTvMetaDataNowFade5="https://c.animaapp.com/pLg7BaBQ/img/fade-9@2x.png"
          tilesNowNextTileTvMetaDataNowFade6="https://c.animaapp.com/pLg7BaBQ/img/fade-9@2x.png"
          tilesNowNextTileTvMetaDataNowFade7="https://c.animaapp.com/pLg7BaBQ/img/fade-9@2x.png"
          tilesNowNextTileTvMetaDataNowFade8="https://c.animaapp.com/pLg7BaBQ/img/fade-9@2x.png"
          tilesNowNextTileTvMetaDataNowFadeClassName="now-next-rail-5"
          tilesNowNextTileTvMetaDataNowFadeClassName1="now-next-rail-9"
          tilesNowNextTileTvMetaDataNowFadeClassName2="now-next-rail-10"
          tilesNowNextTileTvMetaDataNowFadeClassName3="now-next-rail-11"
          tilesNowNextTileTvMetaDataNowFadeClassName4="now-next-rail-12"
          tilesNowNextTileTvMetaDataNowFadeClassName5="now-next-rail-17"
          tilesNowNextTileTvMetaDataNowFadeClassName6="now-next-rail-18"
          tilesNowNextTileTvMetaDataNowFadeClassNameOverride="now-next-rail-6"
          tilesNowNextTileTvMetaDataNowImg="https://c.animaapp.com/pLg7BaBQ/img/image--170@2x.png"
          tilesNowNextTileTvMetaDataNowImgClassName="now-next-rail-7"
          tilesNowNextTileTvMetaDataNowImgClassNameOverride="now-next-rail-8"
          tilesNowNextTileTvMetaDataNowProviderLogo="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-10@2x.png"
          tilesNowNextTileTvMetaDataNowProviderLogo1="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-9@2x.png"
          tilesNowNextTileTvMetaDataNowProviderLogo2="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-8@2x.png"
          tilesNowNextTileTvMetaDataNowProviderLogo3="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-7@2x.png"
          tilesNowNextTileTvMetaDataNowProviderLogo4="https://c.animaapp.com/pLg7BaBQ/img/fade-9@2x.png"
          tilesNowNextTileTvMetaDataNowProviderLogoClassName="now-next-rail-14"
          tilesNowNextTileTvMetaDataNowTitle="https://c.animaapp.com/pLg7BaBQ/img/title-15.svg"
          tilesNowNextTileTvMetaDataNowTitle1="https://c.animaapp.com/pLg7BaBQ/img/title-14.svg"
          tilesNowNextTileTvMetaDataNowTitle2="https://c.animaapp.com/pLg7BaBQ/img/title-13.svg"
          tilesNowNextTileTvMetaDataNowTitle3="https://c.animaapp.com/pLg7BaBQ/img/title-12.svg"
          tilesNowNextTileTvMetaDataNowTitle4="https://c.animaapp.com/pLg7BaBQ/img/title-11.svg"
          tilesNowNextTileTvMetaDataNowTitle5="https://c.animaapp.com/pLg7BaBQ/img/title-10.svg"
          tilesNowNextTileTvMetaDataNowTitle6="https://c.animaapp.com/pLg7BaBQ/img/title-9.svg"
          tilesNowNextTileTvMetaDataNowTitle7="https://c.animaapp.com/pLg7BaBQ/img/title-8.svg"
          tilesNowNextTileTvMetaDataNowTitle8="https://c.animaapp.com/pLg7BaBQ/img/fade-9@2x.png"
          tilesNowNextTileTvMetaDataNowTitle9="https://c.animaapp.com/pLg7BaBQ/img/fade-9@2x.png"
          tilesNowNextTileTvMetaDataNowTitleClassName="now-next-rail-16"
          tilesNowNextTileTvMetaDataNowTitleClassNameOverride="now-next-rail-19"
          visible={false}
        />
        </div>
        <div className="my-rails">
          { title == "My kid" && <div className="element-rail-standard-3" id="inputs-rail">
            <div className="rail-title-4">{title}'s Content</div>
            <div className="tiles-9">
              {family_program_browse_response_shrunken.menuItems.map((item, index) => (
                <CustomTileWrapper 
                  key={index} // Assigning a unique key for each rendered component
                  title={item.title}
                  backgroundImage={`url(${item['Provider Poster Art']})`} 
                />
              ))}
              <ModeRestingSizeWrapper
                className="element-80"
                mode="resting"
                size="standard"
                sizeTileLogoWrapperDescription="https://c.animaapp.com/pLg7BaBQ/img/fade-1@2x.png"
                sizeTileLogoWrapperDescriptionClassName="element-81"
                sizeTileLogoWrapperFade="https://c.animaapp.com/pLg7BaBQ/img/fade-1@2x.png"
                sizeTileLogoWrapperFadeClassName="element-83"
                sizeTileLogoWrapperProviderLogo="https://c.animaapp.com/pLg7BaBQ/img/fade-1@2x.png"
                sizeTileLogoWrapperProviderLogoClassName="element-84"
                sizeTileLogoWrapperTitle="https://c.animaapp.com/pLg7BaBQ/img/fade-1@2x.png"
                sizeTileLogoWrapperTitleClassName="element-82"
              />
            </div>
          </div>}
          {title == "Hai" && <div className="element-rail-standard" id="resume-watching-rail">
            <div className="rail-title-4">{title}'s Content</div>
            <div className="tiles-9">
              {theresa_program_browse_response_shrunken.menuItems.map((item, index) => (
                <CustomTileWrapper 
                  key={index} // Assigning a unique key for each rendered component
                  title={item.title}
                  backgroundImage={`url(${item['Provider Poster Art']})`} 
                />
              ))}
              <ModeRestingSizeWrapper
                className="element-80"
                mode="resting"
                size="standard"
                sizeTileLogoWrapperDescription="https://c.animaapp.com/pLg7BaBQ/img/fade-1@2x.png"
                sizeTileLogoWrapperDescriptionClassName="element-81"
                sizeTileLogoWrapperFade="https://c.animaapp.com/pLg7BaBQ/img/fade-1@2x.png"
                sizeTileLogoWrapperFadeClassName="element-83"
                sizeTileLogoWrapperProviderLogo="https://c.animaapp.com/pLg7BaBQ/img/fade-1@2x.png"
                sizeTileLogoWrapperProviderLogoClassName="element-84"
                sizeTileLogoWrapperTitle="https://c.animaapp.com/pLg7BaBQ/img/fade-1@2x.png"
                sizeTileLogoWrapperTitleClassName="element-82"
              />
            </div>
          </div>}
          {title == "Kevin" && <div className="element-rail-standard-2" id="recs-rail">
            <div className="rail-title-4">{title}'s Content</div>
            <div className="tiles-9">
              {gru_program_browse_response_shrunken.menuItems.map((item, index) => (
                <CustomTileWrapper 
                  key={index} // Assigning a unique key for each rendered component
                  title={item.title}
                  backgroundImage={`url(${item['Provider Poster Art']})`} 
                />
              ))}
              <ModeRestingSizeWrapper
                className="element-80"
                mode="resting"
                size="standard"
                sizeTileLogoWrapperDescription="https://c.animaapp.com/pLg7BaBQ/img/fade-1@2x.png"
                sizeTileLogoWrapperDescriptionClassName="element-81"
                sizeTileLogoWrapperFade="https://c.animaapp.com/pLg7BaBQ/img/fade-1@2x.png"
                sizeTileLogoWrapperFadeClassName="element-83"
                sizeTileLogoWrapperProviderLogo="https://c.animaapp.com/pLg7BaBQ/img/fade-1@2x.png"
                sizeTileLogoWrapperProviderLogoClassName="element-84"
                sizeTileLogoWrapperTitle="https://c.animaapp.com/pLg7BaBQ/img/fade-1@2x.png"
                sizeTileLogoWrapperTitleClassName="element-82"
              />
            </div>
          </div>}
          {title == "Kevin and Hai" && <div className="element-rail-standard-2" id="recs-rail">
            <div className="rail-title-4">{title}'s Content</div>
            <div className="tiles-9">
            {theresa_and_gru_program_browse_response_shrunken.menuItems.map((item, index) => (
              <CustomTileWrapper 
                key={index} // Assigning a unique key for each rendered component
                title={item.title}
                backgroundImage={`url(${item['Provider Poster Art']})`} 
              />
            ))}
              <ModeRestingSizeWrapper
                className="element-80"
                mode="resting"
                size="standard"
                sizeTileLogoWrapperDescription="https://c.animaapp.com/pLg7BaBQ/img/fade-1@2x.png"
                sizeTileLogoWrapperDescriptionClassName="element-81"
                sizeTileLogoWrapperFade="https://c.animaapp.com/pLg7BaBQ/img/fade-1@2x.png"
                sizeTileLogoWrapperFadeClassName="element-83"
                sizeTileLogoWrapperProviderLogo="https://c.animaapp.com/pLg7BaBQ/img/fade-1@2x.png"
                sizeTileLogoWrapperProviderLogoClassName="element-84"
                sizeTileLogoWrapperTitle="https://c.animaapp.com/pLg7BaBQ/img/fade-1@2x.png"
                sizeTileLogoWrapperTitleClassName="element-82"
              />
            </div>
          </div>}
          <div className="element-rail" id="movies-rail">
          <p className="rail-title-4">New movies to rent or buy</p>
          <div className="tiles-5">
            <VariantUnfocusedWrapper className="tiles-3-4-TV" variant="unfocused" />
            <div className="tiles-TV-2">
              <div className="dimmer-wrapper">
                <Dimmer className="dimmer-5" />
              </div>
            </div>
            <div className="tiles-TV-3">
              <div className="dimmer-instance-wrapper">
                <Dimmer className="dimmer-5" />
              </div>
            </div>
            <VariantUnfocusedWrapper className="tiles-TV-instance" variant="unfocused" />
            <VariantUnfocusedWrapper className="tiles-3-4-TV-instance" variant="unfocused" />
            <VariantUnfocusedWrapper className="tiles-TV-4" variant="unfocused" />
            <div className="tiles-TV-5">
              <div className="overlap-group-12">
                <img className="image-10" alt="Image" src="https://c.animaapp.com/pLg7BaBQ/img/image--43@2x.png" />
                <Dimmer className="dimmer-6" />
              </div>
            </div>
            <VariantUnfocusedWrapper className="tiles-TV-6" variant="unfocused" />
            <VariantUnfocusedWrapper className="tiles-TV-7" variant="unfocused" />
          </div>
          </div>
          <div className="hero-switcher-TV" id="large-recommendation">
            <div className="overlap-10">
              <HeroImage
                mask="three-content-block"
                maskContentBlock="https://c.animaapp.com/pLg7BaBQ/img/image-mask-options.svg"
                maskTileFadeClassName="image-mask-options"
              />
              <TitleArt className="title-art-2" />
              <div className="synopsis">
                <ProviderLogo className="design-component-instance-node-2" />
                <div className="title-6">Succession</div>
                <div className="meta-buttons">
                  <div className="frame-3">
                    <MetaSynopsis
                      className="design-component-instance-node-7"
                      masterMetaSynopsisAccessibilityBadgeClassName="design-component-instance-node-6"
                      masterMetaSynopsisAccessibilityBadgeClassNameOverride="design-component-instance-node-6"
                      masterMetaSynopsisAgeRatingClassName="design-component-instance-node-6"
                      masterMetaSynopsisDurationClassName="meta-synopsis-instance"
                      masterMetaSynopsisEpisode={false}
                      masterMetaSynopsisStatusDivClassName="meta-synopsis-2"
                      masterMetaSynopsisStatusIcon={<MyList className="my-list-2" />}
                      masterMetaSynopsisStatusText="Series Added"
                      masterMetaSynopsisVideoQualityClassName="design-component-instance-node-6"
                      type="catch-up"
                    />
                    <p className="synopsis-2">
                      Don’t miss the award-winning, provocative, funny series about a highly dysfunctional dynasty.
                    </p>
                  </div>
                  <ButtonRail
                    buttonMasterButtonFocusMasterButtonText="Watch"
                    buttonMasterButtonFocusMasterButtonTextClassName="design-component-instance-node-6"
                    className="design-component-instance-node-7"
                    focus="unfocused"
                    scrolled={false}
                    visible={false}
                    visible1={false}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="element-rail-2" id="tv-rail">
            <div className="rail-title-4">Trending TV</div>
            <div className="tiles-6">
              <VariantUnfocusedWrapper className="tiles-TV-8" variant="unfocused" />
              <VariantUnfocusedWrapper className="tiles-TV-9" variant="unfocused" />
              <VariantUnfocusedWrapper className="tiles-TV-10" variant="unfocused" />
              <VariantUnfocusedWrapper className="tiles-TV-11" variant="unfocused" />
              <VariantUnfocusedWrapper className="tiles-TV-12" variant="unfocused" />
              <VariantUnfocusedWrapper className="tiles-TV-13" variant="unfocused" />
              <div className="tiles-TV-5">
                <div className="overlap-group-12">
                  <img className="image-11" alt="Image" src="https://c.animaapp.com/pLg7BaBQ/img/image--34@2x.png" />
                  <Dimmer className="dimmer-6" />
                </div>
              </div>
              <VariantUnfocusedWrapper className="tiles-TV-14" variant="unfocused" />
              <VariantUnfocusedWrapper className="tiles-TV-15" variant="unfocused" />
            </div>
          </div>
          <div className="billboard" id="large-recommendation-2">
            <div className="tiles-7">
              <TileBillboard
                className="tile-billboard-instance"
                focus="unfocused"
                focusUnfocusedWrapperMasterBillboardMasterBillboardClassName="element-39"
                focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisEpisodeClassName="element-38"
                focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusDivClassName="element-38"
                focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusIcon={
                  <MyList3 className="my-list-2" />
                }
                focusUnfocusedWrapperMasterBillboardMetaTilesMetaSynopsisMasterMetaSynopsisStatusText="Series Added"
                focusUnfocusedWrapperMasterBillboardMetaTilesProgrammeTitleProgrammeTitle="https://c.animaapp.com/pLg7BaBQ/img/programme-title-2.svg"
                focusUnfocusedWrapperMasterBillboardMetaTilesProviderLogoProviderLogoClassName="design-component-instance-node-2"
                focusUnfocusedWrapperMasterBillboardOverlapGroupClassName="element-40"
              />
              <div className="master-billboard-wrapper">
                <div className="master-billboard-2">
                  <div className="overlap-9">
                    <div className="master-billboard-3">
                      <div className="overlap-group-13">
                        <img
                          className="hero-masked"
                          alt="Hero masked"
                          src="https://c.animaapp.com/pLg7BaBQ/img/hero-masked-1.svg"
                        />
                        <TitleArt className="title-art-instance" />
                        <MetaTiles
                          className="meta-tiles-3"
                          focus="unfocused"
                          metaSynopsisMasterMetaSynopsisEpisodeClassName="design-component-instance-node-4"
                          metaSynopsisMasterMetaSynopsisStatusDivClassName="design-component-instance-node-5"
                          metaSynopsisMasterMetaSynopsisStatusText="Added"
                          metaSynopsisTypeMovieClassName="design-component-instance-node-3"
                          programmeTitleProgrammeTitle="https://c.animaapp.com/pLg7BaBQ/img/programme-title-1.svg"
                          providerLogoProviderLogoClassName="meta-tiles-4"
                          type="billboard"
                        />
                      </div>
                    </div>
                    <ElementsDimmer className="elements-dimmer-2" />
                  </div>
                </div>
              </div>
              <div className="element-41">
                <div className="master-billboard-2">
                  <MasterBillboard
                    className="master-billboard-tile-instance"
                    metaTilesMetaSynopsisMasterMetaSynopsisEpisodeClassName="design-component-instance-node-4"
                    metaTilesMetaSynopsisMasterMetaSynopsisStatusDivClassName="design-component-instance-node-5"
                    metaTilesMetaSynopsisMasterMetaSynopsisStatusText="Added"
                    metaTilesMetaSynopsisTypeMovieClassName="design-component-instance-node-3"
                    metaTilesProgrammeTitleProgrammeTitle="https://c.animaapp.com/pLg7BaBQ/img/image--170@2x.png"
                    metaTilesProgrammeTitleProgrammeTitleClassName="master-billboard-instance"
                    metaTilesProviderLogoProviderLogoClassName="master-billboard-6"
                    metaTilesTypeMinimisedFocusClassName="master-billboard-5"
                    overlapGroupClassName="master-billboard-4"
                  />
                  <ElementsDimmer className="elements-dimmer-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
