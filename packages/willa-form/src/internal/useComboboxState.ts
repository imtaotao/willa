import {
  useSelectionModel,
  type SelectionModelItem,
  type UseSelectionModelOptions,
} from "#form/internal/useSelectionModel";
import {
  useSelectablePanel,
  type UseSelectablePanelOptions,
} from "#form/internal/useSelectablePanel";

export type UseComboboxStateOptions<Item extends SelectionModelItem> =
  UseSelectionModelOptions<Item> & UseSelectablePanelOptions;

export function useComboboxState<Item extends SelectionModelItem>(
  options: UseComboboxStateOptions<Item>,
) {
  return {
    ...useSelectionModel(options),
    ...useSelectablePanel(options),
  };
}
