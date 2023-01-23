import React from "react";
import "./SkillsSection.css";

const SkillsSection = () => {
  return (
    <section className="section__skils">
      <h3>Skills</h3>
      <div className="section__grid">
        <div className="section__card">
          <div className="section__circle"></div>
          <span className="section__title">Blender</span>
        </div>
        <div className="section__card">
          <div className="section__circle"></div>
          <span className="section__title">Maya</span>
        </div>
        <div className="section__card">
          <div className="section__circle"></div>
          <span className="section__title">ZBrush</span>
        </div>
        <div className="section__card">
          <div className="section__circle"></div>
          <span className="section__title">Unreal Engine</span>
        </div>
        <div className="section__card">
          <div className="section__circle"></div>
          <span className="section__title">Marvelous Toolbag</span>
        </div>
        <div className="section__card">
          <div className="section__circle"></div>
          <span className="section__title">Adobe Substance Pointer</span>
        </div>
        <div className="section__card">
          <div className="section__circle"></div>
          <span className="section__title">Adobe Substance Designer</span>
        </div>
        <div className="section__card">
          <div className="section__circle"></div>
          <span className="section__title">Adobe Photoshop</span>
        </div>
        <div className="section__card">
          <div className="section__circle"></div>
          <span className="section__title">Adobe Illustrator</span>
        </div>
        <div className="section__card">
          <div className="section__circle"></div>
          <span className="section__title">Sketchup</span>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
