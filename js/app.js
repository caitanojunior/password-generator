$(function(){
	'use strict';

	var main = {
		init: function(){
			this.btngeneratePasswd();
		},

		generatePasswd: function(){
			var passwd = '',
				possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*_+-={}|<>?,./';

			for (var i = 0; i < 10; i++)
				passwd += possible.charAt(Math.floor(Math.random() * possible.length));

			$('#passwd').html(passwd);

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
					['#', 'Cequirlha'],
					['$', 'Cifrao'],
					['%', 'Porcentagem'],
					['&', 'iComercial'],
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

		btngeneratePasswd: function(){
			$('#btn-generate-passwd').on('click', function(){
				main.generatePasswd();
			});
		}

	};

	return main.init();

});