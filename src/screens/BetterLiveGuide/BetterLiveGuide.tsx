import React from "react";
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
import { MyList } from "../../icons/MyList";
import { MyList3 } from "../../icons/MyList3";
import "./style.css";

export const BetterLiveGuide = (): JSX.Element => {
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
              titleOptionsTvProgramTitle="Avatar: The Way of Water"
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
            <div className="time-battery">
              <div className="time">12.56pm</div>
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
        <div className="element-rail">
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
        <div className="element-rail-2">
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
        <div className="billboard">
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
        <div className="hero-switcher-TV">
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
        <div className="element-rail-large-2">
          <div className="rail-title-5">News on now</div>
          <div className="tiles-8">
            <div className="element-42" data-responsive-tokens-mode="TV">
              <div className="overlap-group-11">
                <div className="div-4">
                  <ElementsFade className="SKY-fade-7" />
                </div>
                <TvMetaDataTiles
                  className="TV-meta-data-tiles-32"
                  description2="https://c.animaapp.com/pLg7BaBQ/img/description-36.svg"
                  descriptionClassName="TV-meta-data-tiles-23"
                  fade="https://c.animaapp.com/pLg7BaBQ/img/fade-35@2x.png"
                  fadeClassName="TV-meta-data-tiles-33"
                  img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-31@2x.png"
                  logoPosition="top"
                  progressBarBrandBarMoveUseClassName="TV-meta-data-tiles-20"
                  progressBarBrandHeightSmallClassName="TV-meta-data-tiles-19"
                  progressBarBrandProgressClassName="TV-meta-data-tiles-20"
                  size="tile"
                  title2="https://c.animaapp.com/pLg7BaBQ/img/title-36.svg"
                  titleClassName="TV-meta-data-tiles-23"
                />
                <div className="dimmer-4" />
              </div>
            </div>
            <div className="element-43" data-responsive-tokens-mode="TV">
              <div className="overlap-group-11">
                <div className="div-4">
                  <ElementsFade className="SKY-fade-7" />
                </div>
                <TvMetaDataTiles
                  className="TV-meta-data-tiles-32"
                  description2="https://c.animaapp.com/pLg7BaBQ/img/description-35.svg"
                  descriptionClassName="TV-meta-data-tiles-23"
                  fade="https://c.animaapp.com/pLg7BaBQ/img/fade-34@2x.png"
                  fadeClassName="TV-meta-data-tiles-34"
                  img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-30@2x.png"
                  logoPosition="top"
                  progressBarBrandBarMoveUseClassName="TV-meta-data-tiles-20"
                  progressBarBrandHeightSmallClassName="TV-meta-data-tiles-19"
                  progressBarBrandProgressClassName="TV-meta-data-tiles-20"
                  size="tile"
                  title2="https://c.animaapp.com/pLg7BaBQ/img/title-35.svg"
                  titleClassName="TV-meta-data-tiles-23"
                />
                <div className="dimmer-4" />
              </div>
            </div>
            <div className="element-44" data-responsive-tokens-mode="TV">
              <div className="overlap-group-11">
                <div className="div-4">
                  <ElementsFade className="SKY-fade-7" />
                </div>
                <TvMetaDataTiles
                  className="TV-meta-data-tiles-32"
                  description2="https://c.animaapp.com/pLg7BaBQ/img/description-34.svg"
                  descriptionClassName="TV-meta-data-tiles-23"
                  fade="https://c.animaapp.com/pLg7BaBQ/img/fade-33@2x.png"
                  fadeClassName="TV-meta-data-tiles-35"
                  img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-29@2x.png"
                  logoPosition="top"
                  progressBarBrandBarMoveUseClassName="TV-meta-data-tiles-20"
                  progressBarBrandHeightSmallClassName="TV-meta-data-tiles-19"
                  progressBarBrandProgressClassName="TV-meta-data-tiles-20"
                  size="tile"
                  title2="https://c.animaapp.com/pLg7BaBQ/img/title-34.svg"
                  titleClassName="TV-meta-data-tiles-23"
                />
                <div className="dimmer-4" />
              </div>
            </div>
            <div className="element-45" data-responsive-tokens-mode="TV">
              <div className="overlap-group-11">
                <img className="image-12" alt="Image" src="https://c.animaapp.com/pLg7BaBQ/img/image--28.png" />
                <div className="div-4">
                  <ElementsFade className="SKY-fade-7" />
                </div>
                <TvMetaDataTiles
                  className="TV-meta-data-tiles-32"
                  description2="https://c.animaapp.com/pLg7BaBQ/img/description-33.svg"
                  descriptionClassName="TV-meta-data-tiles-23"
                  fade="https://c.animaapp.com/pLg7BaBQ/img/image--170@2x.png"
                  fadeClassName="TV-meta-data-tiles-37"
                  img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-28@2x.png"
                  logoPosition="top"
                  progressBarBrandBarMoveUseClassName="TV-meta-data-tiles-20"
                  progressBarBrandHeightSmallClassName="TV-meta-data-tiles-19"
                  progressBarBrandProgressClassName="TV-meta-data-tiles-20"
                  providerLogoClassName="TV-meta-data-tiles-36"
                  size="tile"
                  title2="https://c.animaapp.com/pLg7BaBQ/img/title-33.svg"
                  titleClassName="TV-meta-data-tiles-23"
                />
                <div className="dimmer-4" />
              </div>
            </div>
            <div className="element-46" data-responsive-tokens-mode="TV">
              <div className="overlap-group-11">
                <div className="div-4">
                  <ElementsFade className="SKY-fade-7" />
                </div>
                <TvMetaDataTiles
                  className="TV-meta-data-tiles-32"
                  description2="https://c.animaapp.com/pLg7BaBQ/img/image--170@2x.png"
                  descriptionClassName="TV-meta-data-tiles-41"
                  fade="https://c.animaapp.com/pLg7BaBQ/img/image--170@2x.png"
                  fadeClassName="TV-meta-data-tiles-39"
                  img="https://c.animaapp.com/pLg7BaBQ/img/image--170@2x.png"
                  logoPosition="top"
                  progressBarBrandBarMoveUseClassName="TV-meta-data-tiles-20"
                  progressBarBrandHeightSmallClassName="TV-meta-data-tiles-19"
                  progressBarBrandProgressClassName="TV-meta-data-tiles-20"
                  providerLogoClassName="TV-meta-data-tiles-38"
                  size="tile"
                  title2="https://c.animaapp.com/pLg7BaBQ/img/image--170@2x.png"
                  titleClassName="TV-meta-data-tiles-40"
                />
                <div className="dimmer-4" />
              </div>
            </div>
            <TilesTv
              TVMetaDataTilesDescription="https://c.animaapp.com/pLg7BaBQ/img/image--170@2x.png"
              TVMetaDataTilesDescriptionClassName="tiles-16-9-TV-instance"
              TVMetaDataTilesFade="https://c.animaapp.com/pLg7BaBQ/img/image--170@2x.png"
              TVMetaDataTilesFadeClassName="tiles-TV-17"
              TVMetaDataTilesProviderLogo="https://c.animaapp.com/pLg7BaBQ/img/image--170@2x.png"
              TVMetaDataTilesProviderLogoClassName="tiles-TV-16"
              TVMetaDataTilesTitle="https://c.animaapp.com/pLg7BaBQ/img/image--170@2x.png"
              TVMetaDataTilesTitleClassName="tiles-TV-18"
              className="tiles-16-9-TV"
              mode="resting"
              size="large"
            />
          </div>
        </div>
        <div className="element-rail-standard">
          <div className="rail-title-4">Continue watching</div>
          <div className="tiles-9">
            <div className="element-47">
              <div className="overlap-group-14">
                <SizeTileLogoWrapper
                  className="TV-meta-data-tiles-42"
                  description2="https://c.animaapp.com/pLg7BaBQ/img/description-30.svg"
                  descriptionClassName="TV-meta-data-tiles-23"
                  hasFade={false}
                  heightSmallWrapperHeightSmallClassName="TV-meta-data-tiles-43"
                  img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-25@2x.png"
                  logoPosition="top"
                  providerLogoClassName="TV-meta-data-tiles-43"
                  size="tile"
                  title2="https://c.animaapp.com/pLg7BaBQ/img/title-30.svg"
                  titleClassName="TV-meta-data-tiles-23"
                />
                <div className="dimmer-7" />
              </div>
            </div>
            <div className="element-48">
              <div className="overlap-11">
                <SizeTileLogoWrapper
                  className="TV-meta-data-tiles-42"
                  description2="https://c.animaapp.com/pLg7BaBQ/img/description-29.svg"
                  descriptionClassName="TV-meta-data-tiles-23"
                  fade="https://c.animaapp.com/pLg7BaBQ/img/fade-29@2x.png"
                  fadeClassName="TV-meta-data-tiles-44"
                  heightSmallWrapperHeightSmallClassName="TV-meta-data-tiles-43"
                  img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-24@2x.png"
                  logoPosition="top"
                  providerLogoClassName="TV-meta-data-tiles-43"
                  size="tile"
                  title2="https://c.animaapp.com/pLg7BaBQ/img/title-29.svg"
                  titleClassName="TV-meta-data-tiles-23"
                />
                <div className="dimmer-7" />
              </div>
            </div>
            <div className="element-49">
              <div className="overlap-12">
                <SizeTileLogoWrapper
                  className="TV-meta-data-tiles-42"
                  description2="https://c.animaapp.com/pLg7BaBQ/img/description-28.svg"
                  descriptionClassName="TV-meta-data-tiles-23"
                  fade="https://c.animaapp.com/pLg7BaBQ/img/fade-28@2x.png"
                  fadeClassName="TV-meta-data-tiles-45"
                  heightSmallWrapperHeightSmallClassName="TV-meta-data-tiles-43"
                  img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-23@2x.png"
                  logoPosition="top"
                  providerLogoClassName="TV-meta-data-tiles-43"
                  size="tile"
                  title2="https://c.animaapp.com/pLg7BaBQ/img/title-28.svg"
                  titleClassName="TV-meta-data-tiles-23"
                />
                <div className="dimmer-7" />
              </div>
            </div>
            <div className="element-50">
              <div className="overlap-13">
                <SizeTileLogoWrapper
                  className="TV-meta-data-tiles-42"
                  description2="https://c.animaapp.com/pLg7BaBQ/img/description-27.svg"
                  descriptionClassName="TV-meta-data-tiles-23"
                  fade="https://c.animaapp.com/pLg7BaBQ/img/fade-27@2x.png"
                  fadeClassName="TV-meta-data-tiles-46"
                  heightSmallWrapperHeightSmallClassName="TV-meta-data-tiles-43"
                  img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-22@2x.png"
                  logoPosition="top"
                  providerLogoClassName="TV-meta-data-tiles-43"
                  size="tile"
                  title2="https://c.animaapp.com/pLg7BaBQ/img/title-27.svg"
                  titleClassName="TV-meta-data-tiles-23"
                />
                <div className="dimmer-7" />
              </div>
            </div>
            <div className="element-51">
              <div className="overlap-14">
                <img className="image-13" alt="Image" src="https://c.animaapp.com/pLg7BaBQ/img/image--21@2x.png" />
                <div className="SKY-fade-12" />
                <SizeTileLogoWrapper
                  className="TV-meta-data-tiles-42"
                  description2="https://c.animaapp.com/pLg7BaBQ/img/description-26.svg"
                  descriptionClassName="TV-meta-data-tiles-23"
                  fade="https://c.animaapp.com/pLg7BaBQ/img/fade-26@2x.png"
                  fadeClassName="TV-meta-data-tiles-47"
                  heightSmallWrapperHeightSmallClassName="TV-meta-data-tiles-43"
                  img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-21@2x.png"
                  logoPosition="top"
                  providerLogoClassName="TV-meta-data-tiles-43"
                  size="tile"
                  title2="https://c.animaapp.com/pLg7BaBQ/img/title-26.svg"
                  titleClassName="TV-meta-data-tiles-23"
                />
                <div className="dimmer-7" />
              </div>
            </div>
            <ModeRestingSizeWrapper
              className="element-52"
              mode="resting"
              size="standard"
              sizeTileLogoWrapperDescription="https://c.animaapp.com/pLg7BaBQ/img/fade-26@2x.png"
              sizeTileLogoWrapperDescriptionClassName="element-53"
              sizeTileLogoWrapperFade="https://c.animaapp.com/pLg7BaBQ/img/fade-26@2x.png"
              sizeTileLogoWrapperFadeClassName="element-55"
              sizeTileLogoWrapperProviderLogo="https://c.animaapp.com/pLg7BaBQ/img/fade-26@2x.png"
              sizeTileLogoWrapperProviderLogoClassName="element-56"
              sizeTileLogoWrapperTitle="https://c.animaapp.com/pLg7BaBQ/img/fade-26@2x.png"
              sizeTileLogoWrapperTitleClassName="element-54"
            />
            <ModeRestingSizeWrapper
              className="element-52"
              mode="resting"
              size="standard"
              sizeTileLogoWrapperDescription="https://c.animaapp.com/pLg7BaBQ/img/fade-26@2x.png"
              sizeTileLogoWrapperDescriptionClassName="element-57"
              sizeTileLogoWrapperFade="https://c.animaapp.com/pLg7BaBQ/img/fade-26@2x.png"
              sizeTileLogoWrapperFadeClassName="element-59"
              sizeTileLogoWrapperProviderLogo="https://c.animaapp.com/pLg7BaBQ/img/fade-26@2x.png"
              sizeTileLogoWrapperProviderLogoClassName="element-60"
              sizeTileLogoWrapperTitle="https://c.animaapp.com/pLg7BaBQ/img/fade-26@2x.png"
              sizeTileLogoWrapperTitleClassName="element-58"
            />
          </div>
        </div>
        <div className="element-rail-standard-2">
          <div className="rail-title-4">Today’s top picks</div>
          <div className="tiles-9">
            <div className="element-61">
              <div className="overlap-group-15" />
            </div>
            <div className="element-62">
              <div className="overlap-group-15" />
            </div>
            <div className="element-63">
              <div className="overlap-group-15" />
            </div>
            <div className="element-64">
              <div className="overlap-group-15" />
            </div>
            <ModeRestingSizeWrapper
              className="element-66"
              mode="resting"
              overlapGroupClassName="element-65"
              size="standard"
            />
            <ModeRestingSizeWrapper
              className="element-67"
              mode="resting"
              size="standard"
              sizeTileLogoWrapperDescription="https://c.animaapp.com/pLg7BaBQ/img/image--13@2x.png"
              sizeTileLogoWrapperDescriptionClassName="element-68"
              sizeTileLogoWrapperFade="https://c.animaapp.com/pLg7BaBQ/img/image--13@2x.png"
              sizeTileLogoWrapperFadeClassName="element-70"
              sizeTileLogoWrapperProviderLogo="https://c.animaapp.com/pLg7BaBQ/img/image--13@2x.png"
              sizeTileLogoWrapperProviderLogoClassName="element-71"
              sizeTileLogoWrapperTitle="https://c.animaapp.com/pLg7BaBQ/img/image--13@2x.png"
              sizeTileLogoWrapperTitleClassName="element-69"
            />
            <ModeRestingSizeWrapper
              className="element-67"
              mode="resting"
              size="standard"
              sizeTileLogoWrapperDescription="https://c.animaapp.com/pLg7BaBQ/img/image--13@2x.png"
              sizeTileLogoWrapperDescriptionClassName="element-72"
              sizeTileLogoWrapperFade="https://c.animaapp.com/pLg7BaBQ/img/image--13@2x.png"
              sizeTileLogoWrapperFadeClassName="element-74"
              sizeTileLogoWrapperProviderLogo="https://c.animaapp.com/pLg7BaBQ/img/image--13@2x.png"
              sizeTileLogoWrapperProviderLogoClassName="element-75"
              sizeTileLogoWrapperTitle="https://c.animaapp.com/pLg7BaBQ/img/image--13@2x.png"
              sizeTileLogoWrapperTitleClassName="element-73"
            />
          </div>
        </div>
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
        <div className="element-rail-standard-3">
          <div className="rail-title-4">Recent inputs</div>
          <div className="tiles-10">
            <div className="element-76">
              <div className="overlap-group-16">
                <SizeTileLogoWrapper
                  className="TV-meta-data-tiles-42"
                  description2="https://c.animaapp.com/pLg7BaBQ/img/description-5.svg"
                  descriptionClassName="TV-meta-data-tiles-23"
                  fade="https://c.animaapp.com/pLg7BaBQ/img/fade-5@2x.png"
                  fadeClassName="TV-meta-data-tiles-48"
                  img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-5@2x.png"
                  logoPosition="top"
                  progressBar={false}
                  providerLogoClassName="TV-meta-data-tiles-43"
                  size="tile"
                  title2="https://c.animaapp.com/pLg7BaBQ/img/title-5.svg"
                  titleClassName="TV-meta-data-tiles-23"
                />
                <div className="dimmer-7" />
              </div>
            </div>
            <div className="element-77">
              <div className="overlap-group-16">
                <SizeTileLogoWrapper
                  className="TV-meta-data-tiles-42"
                  description2="https://c.animaapp.com/pLg7BaBQ/img/description-4.svg"
                  descriptionClassName="TV-meta-data-tiles-23"
                  fade="https://c.animaapp.com/pLg7BaBQ/img/fade-4@2x.png"
                  fadeClassName="TV-meta-data-tiles-49"
                  img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-4@2x.png"
                  logoPosition="top"
                  progressBar={false}
                  providerLogoClassName="TV-meta-data-tiles-43"
                  size="tile"
                  title2="https://c.animaapp.com/pLg7BaBQ/img/title-4.svg"
                  titleClassName="TV-meta-data-tiles-23"
                />
                <div className="dimmer-7" />
              </div>
            </div>
            <div className="element-78">
              <div className="overlap-group-16">
                <SizeTileLogoWrapper
                  className="TV-meta-data-tiles-42"
                  description2="https://c.animaapp.com/pLg7BaBQ/img/description-3.svg"
                  descriptionClassName="TV-meta-data-tiles-23"
                  fade="https://c.animaapp.com/pLg7BaBQ/img/fade-3@2x.png"
                  fadeClassName="TV-meta-data-tiles-50"
                  img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-3@2x.png"
                  logoPosition="top"
                  progressBar={false}
                  providerLogoClassName="TV-meta-data-tiles-43"
                  size="tile"
                  title2="https://c.animaapp.com/pLg7BaBQ/img/title-3.svg"
                  titleClassName="TV-meta-data-tiles-23"
                />
                <div className="dimmer-7" />
              </div>
            </div>
            <div className="element-79">
              <div className="overlap-group-16">
                <SizeTileLogoWrapper
                  className="TV-meta-data-tiles-42"
                  description2="https://c.animaapp.com/pLg7BaBQ/img/description-2.svg"
                  descriptionClassName="TV-meta-data-tiles-23"
                  fade="https://c.animaapp.com/pLg7BaBQ/img/fade-2@2x.png"
                  fadeClassName="TV-meta-data-tiles-51"
                  img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-2@2x.png"
                  logoPosition="top"
                  progressBar={false}
                  providerLogoClassName="TV-meta-data-tiles-43"
                  size="tile"
                  title2="https://c.animaapp.com/pLg7BaBQ/img/title-2.svg"
                  titleClassName="TV-meta-data-tiles-23"
                />
                <div className="dimmer-7" />
              </div>
            </div>
            <div className="element-51">
              <div className="overlap-14">
                <img className="image-14" alt="Image" src="https://c.animaapp.com/pLg7BaBQ/img/image--1@2x.png" />
                <div className="SKY-fade-13" />
                <SizeTileLogoWrapper
                  className="TV-meta-data-tiles-42"
                  description2="https://c.animaapp.com/pLg7BaBQ/img/description-2.svg"
                  descriptionClassName="TV-meta-data-tiles-23"
                  fade="https://c.animaapp.com/pLg7BaBQ/img/fade-1@2x.png"
                  fadeClassName="TV-meta-data-tiles-52"
                  img="https://c.animaapp.com/pLg7BaBQ/img/provider-logo-1@2x.png"
                  logoPosition="top"
                  progressBar={false}
                  providerLogoClassName="TV-meta-data-tiles-43"
                  size="tile"
                  title2="https://c.animaapp.com/pLg7BaBQ/img/title-1.svg"
                  titleClassName="TV-meta-data-tiles-23"
                />
                <BadgeTvDefaultWrapper className="badge-TV-default-6" label="Badge" />
                <div className="dimmer-7" />
              </div>
            </div>
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
        </div>
        <div className="lozenge-rails">
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
      </div>
    </div>
  );
};
