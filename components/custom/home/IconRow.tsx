import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Icon } from "@/components/ui/icon";
import { Venus, Mars, Glasses, Brush } from "lucide-react-native";

type IconKey = "venus" | "mars" | "glasses" | "brush";

interface IconRowProps {
  className?: string;
}

const iconData: { key: IconKey; icon: any; label: string }[] = [
  { key: "venus", icon: Venus, label: "Female" },
  { key: "mars", icon: Mars, label: "Male" },
  { key: "brush", icon: Brush, label: "Makeup" },
  { key: "glasses", icon: Glasses, label: "others" },
];

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
      {iconData.map(({ key, icon, label }) => (
        <View key={key} className="flex items-center gap-1">
          <TouchableOpacity
            key={key}
            className={`items-center rounded-full px-4 py-4 ${
              selected[key] ? "bg-slate-200" : "bg-slate-50/20"
            }`}
            onPress={() => toggle(key)}
          >
            <Icon as={icon} className="text-primary" size="md" />
          </TouchableOpacity>
          <Text className="text-xs text-primary mt-1 font-medium">{label}</Text>
        </View>
      ))}
    </View>
  );
};

export default IconRow;
