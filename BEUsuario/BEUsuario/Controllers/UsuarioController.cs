using BEUsuario.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BEUsuario.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UsuarioController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/<UsuarioController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listaUsuarios = await _context.Usuarios.ToListAsync();
                return Ok(listaUsuarios);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

      

        // POST api/<UsuarioController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Usuario usuario)
        {
            try
            {
                _context.Add(usuario);
                await _context.SaveChangesAsync();
                return Ok(usuario);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // PUT api/<UsuarioController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Usuario usuario)
        {
            try
            {
               if(id != usuario.IdUsuario)
                {
                    return NotFound();
                }
                _context.Update(usuario);
                await _context.SaveChangesAsync();
                return Ok(new { message = "El usuario se ha actualizado" });

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // DELETE api/<UsuarioController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var usuario = await _context.Usuarios.FindAsync(id);
                if(usuario == null)
                {
                    return NotFound();
                }
                _context.Usuarios.Remove(usuario);
                await _context.SaveChangesAsync();
                return Ok(new { message = "El usuario se ha eliminado" });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
