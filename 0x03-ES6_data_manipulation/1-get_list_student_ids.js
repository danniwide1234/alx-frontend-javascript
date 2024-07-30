/* eslint-disable no-unused-vars */
/* eslint-disable */

export default function getListStudentIds(studentList) {
    if (Array.isArray(studentList)) {
      const studentIds = studentList.map((student) => student.id);
      return studentIds;
    }
    return [];
  }