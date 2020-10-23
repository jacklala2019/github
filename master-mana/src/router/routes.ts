/*
 * @Author: Lala Jack
 * @Date: 2020-10-23 18:04:12
 * @LastEditors: Ji Lala
 * @LastEditTime: 2020-10-23 18:06:25
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: \master-mana\src\router\routes.ts
 */
import Home from '../containers/home'
import Login from '../containers/user/Login'
import Error_404 from '../containers/error/404'

import Welcome from '@/containers/home/Welcome'
import AddQuestions from '@/containers/home/questions/AddQuestions'

export default [
    {
        path: '/',
        redirect: '/home/welcome'
    },
    {
        path: '/home',
        component: Home,
        authToken: true,
        children: [
            {
                path: '/home/welcome',
                component: Welcome,
            },

            //待批班级
            {
                path: '/home/examPaperClassList',
                component: MarkingClass
            },

            {
                path: '/home/examPaperClassmate',
                component: Marking

            },
            // 批卷详情
            {
                path: '/home/examinationPapers',
                component: MarkDetail
            },
            {
                path: '/home/addUser',
                component: AddUser
            },
            {
                path: '/home/showUser',
                component: ShowUser
            },
            {
                path: '/home/mexamPred',
                component: MexamPred
            },
            //试题管理
            {
                path: '/home/questionsType',
                component: QuestionsType
            },
            {
                path: '/home/watchQuestions',
                component: WatchQuestions
            },
            {
                path: '/home/questionsDetail/:id',
                component: QuestionsDetail
            },
            {
                path: '/home/addQuestions',
                component: AddQuestions
            },
            {
                path: '/home/editQuestions/:id',
                component: EditQuestions
            },
            // 班级管理
            {
                path: '/home/grade',
                component: Grade
            },
            {
                path: '/home/student',
                component: Student
            },
            {
                path: '/home/room',
                component: Classroom
            },

            //试卷管理
            {
                path: '/home/addExam',
                component: AddExam
            },
            {
                path: '/home/examList',
                component: ExamList
            },
            {
                path: '/home/examEdit',
                component: ExamEdit
            },
            {
                path: '/home/examDetail',
                component: ExamDetail
            }
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/404',
        component: Error_404
    },
    {
        path: '/401',
        component: Error_401
    },
    {
        path: '/500',
        component: Error_500
    }
]
