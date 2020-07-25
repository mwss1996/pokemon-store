import * as React from "react";
import Media from "react-media";

export const PlatformContext = React.createContext<{
	platform: "mobile" | "desktop";
}>({ platform: "desktop" });
interface PlatformProviderProps {
	children: JSX.Element;
}
export function PlatformProvider(props: PlatformProviderProps) {
	return (
		<Media
			queries={{
				isMobile: "(max-width: 1000px)"
			}}
		>
			{matches => (
				<PlatformContext.Provider
					value={{
						platform: matches.isMobile ? "mobile" : "desktop"
					}}
				>
					{props.children}
				</PlatformContext.Provider>
			)}
		</Media>
	);
}
