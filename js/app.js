/* ------------------------------------------------------------------------------------------------------------------
    Description : Functions JavaScript Password Generator
    Version     : 1.0        
    Last Update : 17 November, 2013
    Author      : Breno Polanski - breno.polanski@gmail.com - www.brenopolanski.com
---------------------------------------------------------------------------------------------------------------------

SUBTILES:

    0. GLOBAL

--------------------------------------------------------------------------------------------------------------------- */

$(function(){
	'use strict';

// ----- 0. MAIN ----- //

	var main = {
		init: function(){
			this.btnGeneratePasswd();
			this.btnFolderListPasswd();
			this.btnBack();
			this.btnTrash();
			this.btnSavePasswd();
		},

		generatePasswd: function(){
			var passwd = '',
				possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*_+-={}|<>?,./';

			for (var i = 0; i < 10; i++)
				passwd += possible.charAt(Math.floor(Math.random() * possible.length));

			$('#passwd').html(passwd);
			$('#save').show();

			this.decodePasswd(passwd);
		},

		decodePasswd: function(passwd){
			var lexicon = [
					['a', 'alysson'],
					['b', 'breno'],
					['c', 'caramelo'],
					['d', 'diamante'],
					['e', 'ely'],
					['f', 'faca'],
					['g', 'guarana'],
					['h', 'hiper'],
					['i', 'indra'],
					['j', 'jota'],
					['k', 'kiko'],
					['l', 'lama'],
					['m', 'mortadela'],
					['n', 'nada'],
					['o', 'opera'],
					['p', 'pedro'],
					['q', 'querida'],
					['r', 'rato'],
					['s', 'suzana'],
					['t', 'tatu'],
					['u', 'uva'],
					['v', 'variavel'],
					['w', 'washington'],
					['x', 'xuxa'],
					['y', 'yes'],
					['z', 'zebra'],
					['A', 'ALYSSON'],
					['B', 'BRENO'],
					['C', 'CARAMELO'],
					['D', 'DIAMANTE'],
					['E', 'ELY'],
					['F', 'FACA'],
					['G', 'GUARANA'],
					['H', 'HIPER'],
					['I', 'INDRA'],
					['J', 'JOTA'],
					['K', 'KIKO'],
					['L', 'LAMA'],
					['M', 'MORTADELA'],
					['N', 'NADA'],
					['O', 'OPERA'],
					['P', 'PEDRO'],
					['Q', 'QUERIDA'],
					['R', 'RATO'],
					['S', 'SUZANA'],
					['T', 'TATU'],
					['U', 'UVA'],
					['V', 'VARIAVEL'],
					['W', 'WASHINGTON'],
					['X', 'XUXA'],
					['Y', 'YES'],
					['Z', 'ZEBRA'],
					['1', 'Um'],
					['2', 'Dois'],
					['3', 'Tres'],
					['4', 'Quatro'],
					['5', 'Cinco'],
					['6', 'Seis'],
					['7', 'Sete'],
					['8', 'Oito'],
					['9', 'Nove'],
					['10', 'Dez'],
					['!', 'Exclamacao'],
					['@', 'Arroba'],
					['#', 'Cerquilha'],
					['$', 'Cifrao'],
					['%', 'Porcentagem'],
					['&', 'Icomercial'],
					['*', 'Asterico'],
					['_', 'Underline'],
					['+', 'Soma'],
					['-', 'Subtracao'],
					['=', 'Igual'],
					['{', 'ChaveAberta'],
					['}', 'ChaveFechada'],
					['|', 'Pipe'],
					['<', 'MenorQue'],
					['>', 'MaiorQue'],
					['?', 'Interrogacao'],
					[',', 'Virgula'],
					['.', 'Ponto'],
					['/', 'Barra']
				],
				str = passwd.split(''),
			    aux = 0;

			$('#decode-passwd').children().remove().end();
			
			for (var i = 0; i < lexicon.length; i++) {
				if (str[aux] == lexicon[i][0]) {
					$('#decode-passwd').append('<li>'+lexicon[i][1]+'</li>');
					i = 0; aux++;
				}
			}
		},

		btnGeneratePasswd: function(){
			$('#btn-generate-passwd').on('click', function(){
				main.generatePasswd();
				$('#ok').hide();
			});
		},

		btnFolderListPasswd: function(){
			$('#folder').on('click', function(){
				$('#dashboard').hide();
				$('#folder-passwd').show();
				$('#back').show();
				$('#trash').show();
				$('#list-passwd').children().remove().end();
				if (localStorage.length > 0) {
					$('#smile').hide();
					for (var i = 1; i <= localStorage.length; i++) {
						$('#list-passwd').append('<li>'+localStorage.getItem('passwd'+i)+'</li>');
						if (i == localStorage.length)
							$('#list-passwd > li:nth-child('+i+')').css('color','blue');
					}
				} else {
					$('#smile').show();
				}
			});
		},

		btnBack: function(){
			$('#back').on('click', function(){
				$('#dashboard').show();
				$('#folder-passwd').hide();
				$('#back').hide();
				$('#trash').hide();
			});
		},

		btnTrash: function(){
			$('#trash').on('click', function(){
				var dialogConfirm = confirm('Deseja apagar as senhas salvas?');
				if (dialogConfirm == true) {
					localStorage.clear();
					location.reload();
				}
			});
		},

		btnSavePasswd: function(){
			$('#save').on('click', function(){
				localStorage.setItem('passwd'+(localStorage.length+1), $('#passwd').text());
				$('#save').hide();
				$('#ok').show();
			});
		}

	};

	return main.init();

});