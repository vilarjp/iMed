import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index';
import PatientArea from '@/views/Patient/PatientArea';
import CreatePatient from '@/views/Patient/CreatePatient';
import EditPatient from '@/views/Patient/EditPatient';
import PatientList from '@/views/Patient/PatientList';
import EmployeeArea from '@/views/Employee/EmployeeArea';
import CreateReceptionist from '@/views/Employee/CreateReceptionist';
import CreateDoctor from '@/views/Employee/CreateDoctor';
import CreateNurse from '@/views/Employee/CreateNurse';
import EmployeeList from '@/views/Employee/EmployeeList';
import EditReceptionist from '@/views/Employee/EditReceptionist';
import EditDoctor from '@/views/Employee/EditDoctor';
import EditNurse from '@/views/Employee/EditNurse';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/patient-area',
      name: 'PatientArea',
      component: PatientArea
    },
    {
      path: '/create-patient',
      name: 'CreatePatient',
      component: CreatePatient
    },
    { path: '/edit-patient', name: 'EditPatient', component: EditPatient },
    { path: '/patient-list', name: 'PatientList', component: PatientList },
    { path: '/employee-area', name: 'EmployeeArea', component: EmployeeArea },
    {
      path: '/create-receptionist',
      name: 'CreateReceptionist',
      component: CreateReceptionist
    },
    {
      path: '/create-doctor',
      name: 'CreateDoctor',
      component: CreateDoctor
    },
    {
      path: '/create-nurse',
      name: 'CreateNurse',
      component: CreateNurse
    },
    { path: '/employee-list', name: 'EmployeeList', component: EmployeeList },
    {
      path: '/edit-receptionist',
      name: 'EditReceptionist',
      component: EditReceptionist
    },
    {
      path: '/edit-doctor',
      name: 'EditDoctor',
      component: EditDoctor
    },
    {
      path: '/edit-nurse',
      name: 'EditNurse',
      component: EditNurse
    }
  ]
});
