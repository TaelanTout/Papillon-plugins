import { Plugin } from '@/services/PluginService';
import TasksScreen from './screens/TasksScreen';

const TasksPlugin: Plugin = {
  manifest: {
    id: 'com.papillon.enhanced-tasks',
    name: 'Enhanced Tasks',
    description: 'Tâches et rappels améliorés avec récurrence',
    version: '2.0.0',
    author: 'Taëlan TOUT',
    icon: 'checkmark-circle',
  },
  onLoad: () => {
    console.log('Tasks plugin loaded');
  },
  onUnload: () => {
    console.log('Tasks plugin unloaded');
  },
  getRoutes: () => [
    {
      name: 'tasks',
      component: TasksScreen,
      options: {
        title: 'Tâches',
      },
    },
  ],
};

export default TasksPlugin;
