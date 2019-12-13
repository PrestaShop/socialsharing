/**
* 2007-2016 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Open Software License (OSL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/osl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2016 PrestaShop SA
*  @license    http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/

$(document).ready(function(){
	var pageTitle = document.title,
		content = $("#short_description_content").html(),
		img = $("#bigpic").prop('src');
	$('button.social-sharing').on('click', function(){
		type = $(this).attr('data-type');
		if (type.length)
		{
			switch(type)
			{
				case 'twitter':
					window.open('https://twitter.com/intent/tweet?text=' + sharing_name + ' ' + encodeURIComponent(sharing_url), 'sharertwt', 'toolbar=0,status=0,width=640,height=445');
					break;
				case 'facebook':
					var data = {
						s: 100,
						p: {
							title: pageTitle,
							summary: content,
							images: [img],
							url: sharing_url
						}
					};
					window.open('http://www.facebook.com/sharer.php?' + $.param(data), 'sharer', 'toolbar=0,status=0,width=660,height=445');
					break;
				case 'google-plus':
					window.open('https://plus.google.com/share?url=' + sharing_url, 'sharer', 'toolbar=0,status=0,width=395,height=625');
					break;
				case 'pinterest':
					var img_url = sharing_img;
					if (typeof $("#bigpic").attr('src') != 'undefined' && $("#bigpic").attr('src') != '') {
						img_url = $("#bigpic").attr('src');
					}
					window.open('http://www.pinterest.com/pin/create/button/?media=' + img_url + '&url=' + sharing_url, 'sharerpinterest', 'toolbar=0,status=0,width=660,height=445');
					break;
				case 'vk':
					var data = {
						url: sharing_url,
						title: pageTitle,
						description: content,
						image: img,
						noparse: true
					};
					window.open('http://vk.com/share.php?' + $.param(data), 'sharer', 'toolbar=0,status=0,width=660,height=445');
					break;
			}
		}
	});
});
