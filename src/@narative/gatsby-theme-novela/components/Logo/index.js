import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property vallue called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="64px" height="64px"><path fill="#E04F5F" d="M7.9,256C7.9,119,119,7.9,256,7.9C393,7.9,504.1,119,504.1,256c0,137-111.1,248.1-248.1,248.1C119,504.1,7.9,393,7.9,256z"/><path fill="#FFF" d="M408.1,206.8l-150.1-74.9c-1.3-0.6-2.7-0.6-4,0l-150.2,74.9c-1.7,0.8-2.7,2.4-2.7,4.3v29.6c0,1.6,0.8,3.1,2.2,4c1.4,0.9,3.1,1,4.5,0.3l148.2-74l148.1,74c0.6,0.3,1.3,0.5,2,0.5c0.9,0,1.8-0.2,2.5-0.7c1.4-0.9,2.2-2.4,2.2-4V211C410.8,209.2,409.8,207.5,408.1,206.8z"/><path fill="#FFF" d="M380.5 245.8L256 183.8 131.5 245.8 131.5 360.8 200.5 360.8 200.5 272.6 248 272.6 248 360.8 380.5 360.8z"/><path fill="#EA4949" d="M263.7 272.6H295.7V304.6H263.7z"/></svg>
  );
}