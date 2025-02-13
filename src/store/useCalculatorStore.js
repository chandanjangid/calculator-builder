import { create } from 'zustand';

const useCalculatorStore = create((set) => ({
  components: [{ id: '1', label: '1' }, { id: '2', label: '2' }],
}));

export default useCalculatorStore;