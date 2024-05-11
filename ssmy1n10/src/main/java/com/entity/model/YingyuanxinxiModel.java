package com.entity.model;

import com.entity.YingyuanxinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;
import java.io.Serializable;
 

/**
 * 影院信息
 * 接收传参的实体类  
 *（实际开发中配合移动端接口开发手动去掉些没用的字段， 后端一般用entity就够用了） 
 * 取自ModelAndView 的model名称
 * @author 
 * @email 
 * @date 2022-02-06 14:38:15
 */
public class YingyuanxinxiModel  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 影院规模
	 */
	
	private String yingyuanguimo;
		
	/**
	 * 图片
	 */
	
	private String tupian;
		
	/**
	 * 影院地址
	 */
	
	private String yingyuandizhi;
		
	/**
	 * 咨询电话
	 */
	
	private String zixundianhua;
		
	/**
	 * 影院介绍
	 */
	
	private String yingyuanjieshao;
				
	
	/**
	 * 设置：影院规模
	 */
	 
	public void setYingyuanguimo(String yingyuanguimo) {
		this.yingyuanguimo = yingyuanguimo;
	}
	
	/**
	 * 获取：影院规模
	 */
	public String getYingyuanguimo() {
		return yingyuanguimo;
	}
				
	
	/**
	 * 设置：图片
	 */
	 
	public void setTupian(String tupian) {
		this.tupian = tupian;
	}
	
	/**
	 * 获取：图片
	 */
	public String getTupian() {
		return tupian;
	}
				
	
	/**
	 * 设置：影院地址
	 */
	 
	public void setYingyuandizhi(String yingyuandizhi) {
		this.yingyuandizhi = yingyuandizhi;
	}
	
	/**
	 * 获取：影院地址
	 */
	public String getYingyuandizhi() {
		return yingyuandizhi;
	}
				
	
	/**
	 * 设置：咨询电话
	 */
	 
	public void setZixundianhua(String zixundianhua) {
		this.zixundianhua = zixundianhua;
	}
	
	/**
	 * 获取：咨询电话
	 */
	public String getZixundianhua() {
		return zixundianhua;
	}
				
	
	/**
	 * 设置：影院介绍
	 */
	 
	public void setYingyuanjieshao(String yingyuanjieshao) {
		this.yingyuanjieshao = yingyuanjieshao;
	}
	
	/**
	 * 获取：影院介绍
	 */
	public String getYingyuanjieshao() {
		return yingyuanjieshao;
	}
			
}
