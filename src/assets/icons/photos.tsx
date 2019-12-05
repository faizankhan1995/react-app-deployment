import * as React from 'react'
export const Photos = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 16 16" {...props}>
        <rect x="5" y="4" width="8" height="7"/>
        <path d="M3,2v14h12V2H3z M14,15H4V3h10V15z"/>
        <path d="M1,0v14h3v-1H2V1h10v2h1V0H1z"/>
    </svg>
)
export default Photos
