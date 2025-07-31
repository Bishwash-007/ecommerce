import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Icon } from "@/components/ui/icon";
import { Venus, Mars, Glasses, Brush } from "lucide-react-native";

type IconKey = "venus" | "mars" | "glasses" | "brush";

interface IconRowProps {
  className?: string;
}

const IconRow: React.FC<IconRowProps> = ({ className = "" }) => {
  const [selected, setSelected] = useState<Record<IconKey, boolean>>({
    venus: false,
    mars: false,
    glasses: false,
    brush: false,
  });

  const toggle = (key: IconKey) => {
    setSelected((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <View className={`flex-row justify-between items-center ${className}`}>
      {(
        [
          { key: "venus", icon: Venus },
          { key: "mars", icon: Mars },
          { key: "glasses", icon: Glasses },
          { key: "brush", icon: Brush },
        ] as { key: IconKey; icon: any }[]
      ).map(({ key, icon }) => (
        <TouchableOpacity
          key={key}
          className={`flex-row items-center rounded-full p-4 ${
            selected[key] ? "bg-red-950/50" : "bg-primary-50/20"
          }`}
          onPress={() => toggle(key)}
        >
          <Icon as={icon} className="text-primary rounded-full" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default IconRow;
