import bunyan from 'bunyan';

export default bunyan.createLogger({
  name: 'koalerplate',
  level: process.env.LOG_LEVEL || 'info',
  stream: process.stdout,
  serializers: bunyan.stdSerializers,
});
