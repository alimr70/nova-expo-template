import { Text } from "@/components/atoms";
import { Dialog } from "@/components/vendor/reactICX/Dialog";
import { View, Pressable, useWindowDimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import { DialogProps } from "./types";

export default function DialogComponent({
  title = "Delete item?",
  description = "This action cannot be undone.",
  icon = "trash-2",
}: DialogProps) {
  const { width } = useWindowDimensions();
  const ref = useRef(null);

  return (
    <Dialog ref={ref}>
      <Dialog.Trigger>
        <View style={styles.trigger}>
          <Feather name={icon} size={22} color="#fff" />
        </View>
      </Dialog.Trigger>
      <Dialog.Backdrop blurAmount={25} backgroundColor="rgba(0,0,0,0.7)" />
      <Dialog.Content>
        <View style={[styles.content, { width: width - 48 }]}>
          <View style={styles.iconCircle}>
            <Feather name={icon} size={28} color="#ff6b6b" />
          </View>
          <Text>{title}</Text>
          <Text>{description}</Text>
          <View style={styles.actions}>
            <Dialog.Close asChild>
              <Pressable style={[styles.btn, styles.cancelBtn]}>
                <Text style={[styles.cancelText]}>Cancel</Text>
              </Pressable>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Pressable style={[styles.btn, styles.deleteBtn]}>
                <Feather name={icon} size={18} color="#fff" />
                <Text style={[styles.deleteText]}>Confirm</Text>
              </Pressable>
            </Dialog.Close>
          </View>
        </View>
      </Dialog.Content>
    </Dialog>
  );
}
