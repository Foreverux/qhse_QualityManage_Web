import request from '../utils/request'

export const GetCheckItem = () => {
    return request('/api/check_item/tree')
  }
export const GetTaskProcedure = () => {
    return request('/api/task_and_process/tree')
  }
export const GetProblemCategory = () => {
    return request('/api/problem_factor/tree ')
  }
  export const Getdata_dict = () => {
    return request('/api/dictionary/tree')
  }
// export const GetCompany = () => {
//     return request('/api/company/tree ')
//   }

//获取要素表全部节点
export const GetQhseElement=(data)=>{
	return request('/api/querryQhseElement',{method:'get',data})
}
//获取公司列表
export const GetCompany =(data)=>{
		return request('/api/qhse_company/tree',{method:'get',data}
		)
	}
//获取要素二级节点树
export const GetQhseChildElement =(data)=>{
	return request('/api/querryQhseChildElement',{method:'get',data})
}
//返回的data为新增的记录
export const insertQhseTable =(data)=>{
	return request('/api/companyYearManager',{method:'post',data})
}
//返回的值为要删除的记录的id
export const deleteQhseTable =(param)=>{
	return request('/api/delete_companyYearManager/'+param,{method:'DELETE'})
}
//新增选中的要素节点
export const addQHSEYearElement =(data)=>{
	return request('/api/addQHSEYearElement',{method:'post',data})
}
//获取记录
export const GetQhseTable =(data)=>{
	return request('/api/show_companyYearManager',{method:'get',data})
}
//发布记录
export const publishTableElement =(param)=>{
	return request('/api/approval_companyYearManager/'+param,{method:'PUT'})
}
//根据公司和年度查询要素
export const querryQhseElement = (data) => {
  return request(`/api/querryYearElement?companyCode=${data.companyCode}&year=${data.year}`, {method: 'GET',data})
}